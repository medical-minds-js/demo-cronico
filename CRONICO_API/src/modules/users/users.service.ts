import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { UsersRepositoryService } from './users-repository.service';

import { User } from 'src/modules/users/interfaces/user.interface';
import { UserMapper } from './user.utils';
import { OpenPayService } from 'src/core/services/open-pay/open-pay.service';
import { OpenPayCustomer } from 'src/core/services/open-pay/openpay.interfaces';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { UserAilmentsEntity } from 'src/core/database/entities/user-ailments/user-ailments.entity';
import { AilmentsService } from '../ailments/ailments.service';
import { AilmentsFilters } from '../ailments/interfaces/ailments-filters';
import { DoseTakenEntity } from 'src/core/database/entities/doses_taken/dose-taken.entity';
import { FailResponse } from 'src/core/clases/fail.response';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';

@Injectable()
export class UsersService {
  @Inject(UsersRepositoryService)
  private readonly userRepository: UsersRepositoryService;

  @Inject(OpenPayService)
  private readonly openPayService: OpenPayService;

  @Inject(AilmentsService)
  private readonly ailmentsService: AilmentsService;

  async findAll(): Promise<User[]> {
    const items = await this.userRepository.findAll();
    return items.map((item) => {
      return UserMapper(item.get({ plain: true }));
    });
  }

  async findOneById(id: number): Promise<User> {
    const data = await this.userRepository.findOneById(id);
    return UserMapper(data.get({ plain: true }));
  }

  async getById(id: number): Promise<UserEntity> {
    return this.userRepository.findOneById(id);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findUserByEmail(email);
  }

  async saveRegister(user: UserEntity): Promise<User> {
    const data = await this.userRepository.save(user);
    return UserMapper(data.get({ plain: true }));
  }

  async updateRegister(user: UserEntity): Promise<number[]> {
    const userFinded = await this.userRepository.findOneById(user.id);
    if (!userFinded) {
      throw new NotFoundException('Registro no encontrado');
    }
    user.profileId = userFinded.profileId;
    user.pass = userFinded.pass;
    user.salt = userFinded.salt;
    user.enableOpenPay = userFinded.enableOpenPay;
    user.openPayId = userFinded.openPayId;
    user.createdAt = userFinded.createdAt;
    const data = await this.userRepository.update(user);
    if (data[0] === 0) {
      throw new FailResponse('Error al actualizar');
    }
    return data;
  }

  async activePayment(userId: number): Promise<string> {
    const user = await this.userRepository.findOneById(userId);
    if (!user.enableOpenPay) {
      const data: OpenPayCustomer = {
        name: user.name,
        last_name: user.surname,
        email: user.email,
      } as any;
      const openpay = await this.openPayService.registerCustomer(data);
      await this.userRepository.updateOpenPayId(user.id, openpay.id);
      await user.reload();
    }
    return 'Activado';
  }

  async getPaymentId(userId: number): Promise<string> {
    const user = await this.userRepository.findOneById(userId);
    return user.openPayId;
  }

  async getUserAilments(
    userId: number,
    filters: AilmentsFilters,
  ): Promise<AilmentEntity[]> {
    const users = await this.userRepository.findAilments(userId);
    let list = [];
    if (users.length === 0) {
      const all = await this.ailmentsService.viewAll(filters);
      list = all.map((ailment) => ({ ...ailment, userAilments: null }));
    } else if (users.length > 0 && filters.name) {
      const all = await this.ailmentsService.viewAll(filters);
      list = all.map((ailment) => {
        const userAilment = users.find((user) => user.id === ailment.id);
        return userAilment ? userAilment : { ...ailment, userAilments: null };
      });
    } else {
      list = users.map((item) => {
        const { UserAilmentsEntity, ...rest } = item.get({ plain: true });
        return { ...rest, userAilments: UserAilmentsEntity };
      });
    }
    return list;
  }

  async addAilments(
    userId: number,
    ailments: AilmentEntity,
  ): Promise<UserAilmentsEntity> {
    const products = await this.userRepository.getProductsAilments(ailments.id);
    const data: UserAilmentsEntity = {
      userId,
      ailmentsId: ailments.id,
      userAilmentsProducts: products.map((i) => ({
        productId: i.id,
      })),
    } as UserAilmentsEntity;
    return this.userRepository.addAilments(data);
  }

  async getFullUserAilments(id) {
    const data = await this.userRepository.getUserAilments(id);
    const ailments = await this.ailmentsService.viewById(data.ailmentsId);
    return { ...data.get({ plain: true }), ailments };
  }

  async configUserAilmentsProduct(id: number, data: UserAilmentsProductEntity) {
    const found = await this.userRepository.getProductByUserAilments(id);
    if (!found) {
      throw new NotFoundException('No se encontro el registro');
    }
    await this.userRepository.updateProductByUserAilments(id, data);
  }

  async createDoseTaken(info: UserAilmentsProductEntity) {
    const data = { subscriptionProductId: info.id } as DoseTakenEntity;
    return this.userRepository.createDoseTaken(data);
  }
}
