import { Inject, Injectable } from '@nestjs/common';
import {
  ADDRESS_REPOSITORY,
  ADDRESS_DELIVERIES_TIME_REPOSITORY,
  DELIVERY_TIME_REPOSITORY,
} from 'src/core/constants';
import { AddressDeliveryTimeEntity } from 'src/core/database/entities/address-deliveries-times/address-deliveries-times.entity';
import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';

@Injectable()
export class AddressRepositoryService {
  constructor(
    @Inject(ADDRESS_REPOSITORY)
    private readonly addressRepository: typeof AddressEntity,
    @Inject(ADDRESS_DELIVERIES_TIME_REPOSITORY)
    private readonly adressDeliveryTimeRepository: typeof AddressDeliveryTimeEntity,
    @Inject(DELIVERY_TIME_REPOSITORY)
    private readonly deliveryTimeRepository: typeof DeliveryTimeEntity,
  ) {}

  async findAddressByUserId(userId: number): Promise<AddressEntity[]> {
    const data = await this.addressRepository.findAll<AddressEntity>({
      where: { userId: [userId] },
    });
    return data.map((item) => item.get({ plain: true }));
  }

  async findDelieryTimesByAddress(
    adressIds: number[],
  ): Promise<AddressDeliveryTimeEntity[]> {
    let delieries =
      await this.deliveryTimeRepository.findAll<DeliveryTimeEntity>();
    delieries = delieries.map((item) => item.get({ plain: true }));
    const data =
      await this.adressDeliveryTimeRepository.findAll<AddressDeliveryTimeEntity>(
        {
          where: { addressId: adressIds },
        },
      );
    return data.map((item) => {
      const found = delieries.find(
        (delivery) => delivery.id == item.deliveryTimeId,
      );
      return {
        ...item.get({ plain: true }),
        deliveryTime: found,
      };
    });
  }

  async findActiveAddressByUserId(userId: number): Promise<AddressEntity> {
    return this.addressRepository.findOne<AddressEntity>({
      where: { userId: [userId], status: [1] },
      include: [DeliveryTimeEntity],
    });
  }

  async save(address: AddressEntity): Promise<AddressEntity> {
    return await this.addressRepository.create({
      id: address.id,
      userId: address.userId,
      //deliveryTimeId: address.deliveryTimeId,
      name: address.name,
      street: address.street,
      streetNumber: address.streetNumber,
      interiorNumber: address.interiorNumber,
      suburb: address.suburb,
      cp: address.cp,
      location: address.location,
      comments: address.comments,
      state: address.state,
      reference: address.reference,
      status: address.status,
    });
  }

  async delete(id: number) {
    return await this.addressRepository.destroy<AddressEntity>({
      where: { id: [id] },
    });
  }

  async findOneById(id: number): Promise<AddressEntity> {
    return await this.addressRepository.findOne({
      where: { id: [id] },
      include: [DeliveryTimeEntity],
    });
  }

  async update(id: number, address: AddressEntity): Promise<number[]> {
    return await this.addressRepository.update<AddressEntity>(
      {
        id: address.id,
        userId: address.userId,
        deliveryTimes: address.deliveryTimes,
        name: address.name,
        street: address.street,
        streetNumber: address.streetNumber,
        suburb: address.suburb,
        cp: address.cp,
        location: address.location,
        comments: address.comments,
        state: address.state,
        reference: address.reference,
        status: address.status,
      },
      { where: { id: [id] } },
    );
  }

  async cancelPriorityAddress(userId: number): Promise<number[]> {
    return await this.addressRepository.update<AddressEntity>(
      { status: 0 },
      { where: { userId: [userId] } },
    );
  }

  async setActiveAdrress(id: number): Promise<number[]> {
    return await this.addressRepository.update<AddressEntity>(
      { status: 1 },
      { where: { id } },
    );
  }

  async updateDelieryTimes(addressId, deliveryTimes) {
    await this.deleteDeliveryTimes(addressId);
    const data = deliveryTimes.map((item) => ({
      addressId,
      deliveryTimeId: item.id,
    }));
    await AddressDeliveryTimeEntity.bulkCreate(data);
  }

  async deleteDeliveryTimes(addressId) {
    await AddressDeliveryTimeEntity.destroy({ where: { addressId } });
  }
}
