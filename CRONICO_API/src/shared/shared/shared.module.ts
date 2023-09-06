import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { ailmentEntityProviders } from 'src/core/database/entities/ailments/ailment-entity.providers';
import { doseTakenEntityProviders } from 'src/core/database/entities/doses_taken/dose-taken-entity.providers';
import { orderProductProviders } from 'src/core/database/entities/order-products/order-product-entity.providers';
import { ordersSubscriptionsProviders } from 'src/core/database/entities/order-subscription/order-subscription-entity.providers';
import { ordersProviders } from 'src/core/database/entities/order/order-entity.providers';
import { productImageEntityProviders } from 'src/core/database/entities/product-images/product-images-entity.providers';
import { productEntityProviders } from 'src/core/database/entities/product/product-entity.providers';
import { shoppingCartEntityProviders } from 'src/core/database/entities/shopping-carts/shopping-cart-entity.providers';
import { subscriptionProductEntityProviders } from 'src/core/database/entities/subscription-products/subscription-product-entity.providers';
import { subscriptionEntityProviders } from 'src/core/database/entities/subscription/subscription-entity.providers';
import { userAilmentsProductEntityProviders } from 'src/core/database/entities/user-ailments-product/user-ailments-product-entity.providers';
import { userAilmentsEntityProviders } from 'src/core/database/entities/user-ailments/user-ailments-entity.providers';
import { userEntityProviders } from 'src/core/database/entities/user/user-entity.providers';
import { wmsCustomerRequirementDetailEntityProviders } from 'src/core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail-entity.providers';
import { wmsCustomerRequirementEntityProviders } from 'src/core/database/entities/wms-customer-requirement/wms-customer-requirement-entity.providers';
import { PasswordStrategyService } from 'src/core/services/password-strategy/password-strategy.service';

@Module({
  providers: [
    PasswordStrategyService,
    ...ordersProviders,
    ...orderProductProviders,
    ...subscriptionEntityProviders,
    ...subscriptionProductEntityProviders,
    ...wmsCustomerRequirementEntityProviders,
    ...wmsCustomerRequirementDetailEntityProviders,
    ...ordersSubscriptionsProviders,
    ...shoppingCartEntityProviders,
    ...productEntityProviders,
    ...productImageEntityProviders,
    ...ailmentEntityProviders,
    ...subscriptionEntityProviders,
    ...subscriptionProductEntityProviders,
    ...userAilmentsProductEntityProviders,
    ...userEntityProviders,
    ...userAilmentsEntityProviders,
    ...doseTakenEntityProviders,
    ...userEntityProviders,
    ...ailmentEntityProviders,
    ...databaseProviders,
  ],
  exports: [
    PasswordStrategyService,
    ...ordersProviders,
    ...orderProductProviders,
    ...subscriptionEntityProviders,
    ...subscriptionProductEntityProviders,
    ...wmsCustomerRequirementEntityProviders,
    ...wmsCustomerRequirementDetailEntityProviders,
    ...ordersSubscriptionsProviders,
    ...shoppingCartEntityProviders,
    ...productEntityProviders,
    ...productImageEntityProviders,
    ...ailmentEntityProviders,
    ...subscriptionEntityProviders,
    ...subscriptionProductEntityProviders,
    ...userAilmentsProductEntityProviders,
    ...userEntityProviders,
    ...userAilmentsEntityProviders,
    ...doseTakenEntityProviders,
    ...userEntityProviders,
    ...ailmentEntityProviders,
    ...databaseProviders,
  ],
  imports: [],
})
export class SharedModule {}
