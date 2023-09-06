import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepositoryService } from './address-repository.service';
import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { DeliveryTimesRepositoryService } from '../deliveries-times/deliveries-times-repository.service';

@Injectable()
export class AddressService {
  @Inject(AddressRepositoryService)
  private readonly addressRepository: AddressRepositoryService;

  @Inject(DeliveryTimesRepositoryService)
  private readonly deliveriesTimesRepository: DeliveryTimesRepositoryService;

  async findByUserId(userId: number): Promise<AddressEntity[]> {
    const data = await this.addressRepository.findAddressByUserId(userId);
    const deliveries = await this.addressRepository.findDelieryTimesByAddress(
      data.map((item) => item.id),
    );
    return data.map((item) => ({
      ...item,
      deliveryTimes: deliveries
        .filter((delivery) => item.id === delivery.addressId)
        .map((item) => item.deliveryTime),
    })) as any;
  }

  async findActiveByUserId(userId: number): Promise<AddressEntity> {
    return this.addressRepository.findActiveAddressByUserId(userId);
  }

  async save(address: AddressEntity): Promise<AddressEntity> {
    const data = await this.addressRepository.save(address);
    if (address.deliveryTimes != undefined) {
      await this.addressRepository.updateDelieryTimes(
        data.id,
        address.deliveryTimes,
      );
    }
    return data.get({
      plain: true,
    }) as AddressEntity;
  }

  async delete(id: number): Promise<number> {
    const addressFinded = await this.addressRepository.findOneById(id);
    if (!addressFinded) {
      throw new NotFoundException('Salida');
    }
    await this.addressRepository.deleteDeliveryTimes(addressFinded.id);
    return await this.addressRepository.delete(id);
  }

  async updateAddress(id: number, address: AddressEntity): Promise<number[]> {
    const cartFinded = await this.addressRepository.findOneById(id);
    if (!cartFinded == null) {
      throw new NotFoundException('Direccion no encontrada');
    }
    if (address.status == 1) {
      await this.addressRepository.cancelPriorityAddress(address.userId);
    }
    const data = await this.addressRepository.update(id, address);
    await this.addressRepository.updateDelieryTimes(id, address.deliveryTimes);
    return data;
  }

  async setDefaultByUser(userId: number, id: number) {
    await this.addressRepository.cancelPriorityAddress(userId);
    await this.addressRepository.setActiveAdrress(id);
  }
}
