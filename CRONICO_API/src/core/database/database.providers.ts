import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { Dialect } from 'sequelize';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { ProfileEntity } from './entities/profile/profile.entity';
import { TypeMediaEntity } from './entities/type_media/type-media.entity';
import { OrderStatusEntity } from './entities/order-status/order-status.entity';
import { OrderProductStatusEntity } from './entities/order-product-status/order-product-status.entity';
import { OrderEntity } from './entities/order/order.entity';
import { OrderProductEntity } from './entities/order-products/order-product.entity';
import { NewsEntity } from './entities/news/news.entity';
import { NewsMediaEntity } from './entities/news-media/news-media.entity';
import { CardEntity } from './entities/cards/cards.entity';
import { AddressEntity } from './entities/address/address.entity';
import { AilmentEntity } from './entities/ailments/ailment.entity';
import { ProductEntity } from './entities/product/product.entity';
import { ProductImageEntity } from './entities/product-images/product-images.entity';
import { ProductPartEntity } from './entities/product-parts/product-parts.entity';
import { SaleEntity } from './entities/sales/sale.entity';
import { ShoppingCartEntity } from './entities/shopping-carts/shopping-cart.entity';
import { SupplyEntity } from './entities/supplies/supply.entity';
import { DeliveryTimeEntity } from './entities/deliveries-times/deliveries-times.entity';
import { AilmentsImageEntity } from './entities/ailments-images/ailment-images.entity';
import { SubscriptionEntity } from './entities/subscription/subscription.entity';
import { SubscriptionStatusEntity } from './entities/subscription-status/subscription-status.entity';
import { ProductAilmentsEntity } from './entities/product-ailments/product-ailments.entity';
import { WmsCustomerRequirementEntity } from './entities/wms-customer-requirement/wms-customer-requirement.entity';
import { WmsCustomerRequirementDetailEntity } from './entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity';
import { PostalCodeEntity } from './entities/postal-codes/postal-code.entity';
import { AddressDeliveryTimeEntity } from './entities/address-deliveries-times/address-deliveries-times.entity';
import { SupplyRequestEntity } from './entities/supply-requests/supply-request.entity';
import { SubscriptionProductEntity } from './entities/subscription-products/subscription-product.entity';
import { SubscriptionProductStatusEntity } from './entities/subscription-product-status/subscription-product-status.entity';
import { UserAilmentsEntity } from './entities/user-ailments/user-ailments.entity';
import { UserAilmentsProductEntity } from './entities/user-ailments-product/user-ailments-product.entity';
import { DoseTakenEntity } from './entities/doses_taken/dose-taken.entity';
import { OrderSubscriptionEntity } from './entities/order-subscription/order-subscription.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        databaseConfig.database,
        databaseConfig.username,
        databaseConfig.password,
        {
          dialect: databaseConfig.dialect as Dialect,
          host: databaseConfig.host,
          port: databaseConfig.port,
        },
      );
      sequelize.addModels([
        ProfileEntity,
        TypeMediaEntity,
        UserEntity,
        AddressEntity,
        DeliveryTimeEntity,
        AilmentEntity,
        AilmentsImageEntity,
        ProductAilmentsEntity,
        CardEntity,
        NewsEntity,
        NewsMediaEntity,
        ProductEntity,
        ProductImageEntity,
        ProductPartEntity,
        SaleEntity,
        OrderEntity,
        OrderStatusEntity,
        OrderProductStatusEntity,
        OrderProductEntity,
        ShoppingCartEntity,
        SupplyEntity,
        AddressDeliveryTimeEntity,
        SubscriptionStatusEntity,
        SubscriptionEntity,
        SubscriptionProductStatusEntity,
        SubscriptionProductEntity,
        OrderSubscriptionEntity,
        PostalCodeEntity,
        SupplyRequestEntity,
        UserAilmentsEntity,
        UserAilmentsProductEntity,
        DoseTakenEntity,
        WmsCustomerRequirementEntity,
        WmsCustomerRequirementDetailEntity,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
