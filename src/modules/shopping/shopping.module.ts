import { Module } from '@nestjs/common';
import { ShoppingController } from './shopping.controller';
import { ShoppingService } from './shopping.service';
import { OrdersRepositoryService } from './orders-repository.service';
import { SubscriptionsRepositoryService } from './subscriptions-repository.service';

import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';
import { OpenPayService } from '../../core/services/open-pay/open-pay.service';
import { WmsCustomerRequirementRepositoryService } from './wms-customer-requirement-repository.service';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';
import { SharedModule } from 'src/shared/shared/shared.module';

@Module({
  controllers: [ShoppingController],
  providers: [
    ShoppingService,
    OrdersRepositoryService,
    SubscriptionsRepositoryService,
    WmsCustomerRequirementRepositoryService,
    OpenPayService,
  ],
  imports: [
    JwtModule.register(jwtOptions),
    SharedModule,
    ProductsModule,
    UsersModule,
  ],
  exports: [ShoppingService],
})
export class ShoppingModule {}
