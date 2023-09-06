import { Inject, Injectable } from '@nestjs/common';
import {
  AILMENT_REPOSITORY,
  DOSES_TAKEN_REPOSITORY,
  USER_AILMENTS_PRODUCT_REPOSITORY,
  USER_AILMENTS_REPOSITORY,
  USER_REPOSITORY,
} from 'src/core/constants';
import { ProfileEntity } from 'src/core/database/entities/profile/profile.entity';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { LoginDto } from '../auth/dto/login.dto.interface';
import { AilmentsImageEntity } from 'src/core/database/entities/ailments-images/ailment-images.entity';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { UserAilmentsEntity } from 'src/core/database/entities/user-ailments/user-ailments.entity';
import { DoseTakenEntity } from 'src/core/database/entities/doses_taken/dose-taken.entity';
import { Op } from 'sequelize';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';

@Injectable()
export class UsersRepositoryService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof UserEntity,
    @Inject(AILMENT_REPOSITORY)
    private readonly ailmentsRepository: typeof AilmentEntity,
    @Inject(USER_AILMENTS_REPOSITORY)
    private readonly userAilmentsRepository: typeof UserAilmentsEntity,
    @Inject(USER_AILMENTS_PRODUCT_REPOSITORY)
    private readonly userAilmentsProductsRepository: typeof UserAilmentsProductEntity,
    @Inject(DOSES_TAKEN_REPOSITORY)
    private readonly doseTakenRepository: typeof DoseTakenEntity,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll<UserEntity>({
      include: [ProfileEntity],
    });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne<UserEntity>({ where: { id } });
  }

  async findLogin(loginDto: LoginDto): Promise<UserEntity> {
    return await this.userRepository.findOne<UserEntity>({
      where: { email: loginDto.email, pass: loginDto.pass },
    });
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne<UserEntity>({
      where: { email },
    });
  }

  async save(data: UserEntity): Promise<UserEntity> {
    return this.userRepository.create<UserEntity>(data as any);
  }

  async update(data: UserEntity): Promise<number[]> {
    return await this.userRepository.update<UserEntity>(
      {
        id: data.id,
        profileId: data.profileId,
        name: data.name,
        surname: data.surname,
        secondSurname: data.secondSurname,
        birthDate: data.birthDate,
        picture: data.picture,
      },
      {
        where: { id: [data.id] },
      },
    );
  }

  async updateOpenPayId(userId, openPayId) {
    return await this.userRepository.update<UserEntity>(
      { enableOpenPay: '1', openPayId: openPayId },
      { where: { id: userId } },
    );
  }

  async findAilments(userId): Promise<any> {
    const data = await this.userRepository.findOne<UserEntity>({
      where: { id: userId },
      include: [
        {
          model: AilmentEntity,
          include: [AilmentsImageEntity],
        },
      ],
    });
    return data.ailments;
  }

  async getProductsAilments(id): Promise<any> {
    const data = await this.ailmentsRepository.findOne<AilmentEntity>({
      where: { id },
      include: [
        {
          model: ProductEntity,
        },
      ],
    });
    return data.products;
  }

  async getProductByUserAilments(id): Promise<UserAilmentsProductEntity> {
    return this.userAilmentsProductsRepository.findOne<UserAilmentsProductEntity>(
      {
        where: { id },
      },
    );
  }

  async updateProductByUserAilments(
    id: number,
    data: UserAilmentsProductEntity,
  ) {
    const update = {
      firstTake: data.firstTake,
      intakePeriod: data.intakePeriod,
    };
    if (!data.firstTake) {
      update.firstTake = new Date();
    }
    return this.userAilmentsProductsRepository.update(
      {
        firstTake: data.firstTake,
        intakePeriod: data.intakePeriod,
      },
      { where: { id } },
    );
  }

  async addAilments(data: UserAilmentsEntity): Promise<UserAilmentsEntity> {
    const userAilments =
      await this.userAilmentsRepository.create<UserAilmentsEntity>({ ...data });
    await this.userAilmentsProductsRepository.bulkCreate(
      data.userAilmentsProducts.map((i) => ({
        ...i,
        userAilmentsId: userAilments.id,
      })),
    );
    return userAilments;
  }

  async getUserAilments(id: number): Promise<UserAilmentsEntity> {
    const data = await this.userAilmentsRepository.findOne<UserAilmentsEntity>({
      where: { id },
      include: [
        {
          model: UserAilmentsProductEntity,
          include: [ProductEntity],
        },
      ],
    });
    return data;
  }

  async viewDoseTakenByDate(
    userAilmentsId: number,
  ): Promise<DoseTakenEntity[]> {
    const tmp = new Date().toISOString().split('T')[0];
    const data = await this.doseTakenRepository.findAll({
      where: {
        userAilmentsId,
        doseDate: {
          [Op.between]: [tmp + ' 00:00:00', tmp + ' 23:59:59'],
        },
      },
      include: [UserAilmentsProductEntity],
    });
    return data.map((i) => {
      const info = i.get({ plain: true });
      delete info.userAilments;
      return info;
    });
  }

  async createDoseTaken(data: DoseTakenEntity): Promise<DoseTakenEntity> {
    return this.doseTakenRepository.create({
      ...data,
      doseDate: new Date(),
      status: 1,
    });
  }
}
