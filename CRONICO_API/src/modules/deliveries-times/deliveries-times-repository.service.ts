import { Inject, Injectable } from '@nestjs/common';
import { DELIVERY_TIME_REPOSITORY } from 'src/core/constants';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';

@Injectable()
export class DeliveryTimesRepositoryService {
  constructor(
    @Inject(DELIVERY_TIME_REPOSITORY)
    private readonly deliveryTimesRepository: typeof DeliveryTimeEntity,
  ) {}

  async save(data: DeliveryTimeEntity): Promise<DeliveryTimeEntity> {
    return await this.deliveryTimesRepository.create({
      //addressId: data.addressId,
      startTime: data.startTime,
      endTime: data.endTime,
      status: 0,
    });
  }

  async update(id: number, data: DeliveryTimeEntity): Promise<number[]> {
    return await this.deliveryTimesRepository.update<DeliveryTimeEntity>(
      {
        id: data.id,
        startTime: data.startTime,
        endTime: data.endTime,
        status: data.status,
      },
      { where: { id: [id] } },
    );
  }

  async updateStatus(id: number): Promise<number[]> {
    return await this.deliveryTimesRepository.update<DeliveryTimeEntity>(
      {
        status: 0,
      },
      { where: { addressId: [id] } },
    );
  }

  async findOneById(id: number): Promise<DeliveryTimeEntity> {
    return await this.deliveryTimesRepository.findOne({
      where: { id: [id] },
    });
  }

  async getList(): Promise<DeliveryTimeEntity[]> {
    return await this.deliveryTimesRepository.findAll<DeliveryTimeEntity>();
  }

  async delete(id: number) {
    return await this.deliveryTimesRepository.destroy<DeliveryTimeEntity>({
      where: { id: [id] },
    });
  }
}
