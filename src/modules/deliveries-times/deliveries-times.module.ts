import { Module } from '@nestjs/common';
import { DeliveriesTimesService } from './deliveries-times.service';
import { DeliveryTimesRepositoryService } from './deliveries-times-repository.service';
import { DeliveriesTimesController } from './deliveries-times.controller';
import { deliveriesTimesEntityProviders } from 'src/core/database/entities/deliveries-times/deliveries-times-entity.providers';

@Module({
  providers: [
    DeliveriesTimesService,
    DeliveryTimesRepositoryService,
    ...deliveriesTimesEntityProviders,
  ],
  controllers: [DeliveriesTimesController],
  exports: [DeliveryTimesRepositoryService],
})
export class DeliveriesTimesModule {}
