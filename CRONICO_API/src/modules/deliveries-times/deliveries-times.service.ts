import { Inject, Injectable } from '@nestjs/common';
import { DeliveryTimesRepositoryService } from './deliveries-times-repository.service';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';

@Injectable()
export class DeliveriesTimesService {
  @Inject(DeliveryTimesRepositoryService)
  private readonly deliveriesTimesRepository: DeliveryTimesRepositoryService;

  async getDeliveriesTimesList(): Promise<DeliveryTimeEntity[]> {
    const data = await this.deliveriesTimesRepository.getList();
    return data.map((item) => {
      const { ...rest } = item.get({ plain: true });
      return rest as DeliveryTimeEntity;
    });
  }

  async save(delivery: DeliveryTimeEntity): Promise<DeliveryTimeEntity> {
    const data = await this.deliveriesTimesRepository.save(delivery);
    return data.get({ plain: true }) as DeliveryTimeEntity;
  }

  async delete(id: number): Promise<number> {
    const deliveryFinded = await this.deliveriesTimesRepository.findOneById(id);
    if (deliveryFinded == null) {
      return -1;
    }
    return await this.deliveriesTimesRepository.delete(id);
  }

  async updateDeliveryTime(
    id: number,
    delivery: DeliveryTimeEntity,
  ): Promise<number[]> {
    const deliveryFinded = await this.deliveriesTimesRepository.findOneById(id);
    if (deliveryFinded == null) {
      return [-1];
    }
    if (delivery.status == 1) {
      // const list = await this.deliveriesTimesRepository.updateStatus(
      //   delivery.addressId,
      // );
    }
    const data = await this.deliveriesTimesRepository.update(id, delivery);

    return data;
  }
}
