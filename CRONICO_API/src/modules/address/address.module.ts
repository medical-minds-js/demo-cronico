import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressRepositoryService } from './address-repository.service';
import { addressEntityProviders } from 'src/core/database/entities/address/address-entity.providers';
import { DeliveriesTimesModule } from '../deliveries-times/deliveries-times.module';
import { SharedModule } from 'src/shared/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';
import { addressDeliveriesTimesEntityProviders } from 'src/core/database/entities/address-deliveries-times/address-deliveries-times-entity.providers';
import { deliveriesTimesEntityProviders } from 'src/core/database/entities/deliveries-times/deliveries-times-entity.providers';

@Module({
  controllers: [AddressController],
  providers: [
    AddressService,
    AddressRepositoryService,
    ...addressEntityProviders,
    ...addressDeliveriesTimesEntityProviders,
    ...deliveriesTimesEntityProviders,
  ],
  exports: [AddressService],
  imports: [
    DeliveriesTimesModule,
    SharedModule,
    JwtModule.register(jwtOptions),
  ],
})
export class AddressModule {}
