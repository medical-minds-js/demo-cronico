import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartRepositoryService } from './shopping-cart-repository.service';
import { ShoppingCartControllerController } from './shopping-cart.controller';
import { shoppingCartEntityProviders } from 'src/core/database/entities/shopping-carts/shopping-cart-entity.providers';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';
import { AddressModule } from '../address/address.module';
import { CardsModule } from '../cards/cards.module';
import { ShoppingModule } from '../shopping/shopping.module';
import { UsersModule } from '../users/users.module';
import { ProductsService } from '../products/products.service';
import { productEntityProviders } from 'src/core/database/entities/product/product-entity.providers';
import { productImageEntityProviders } from 'src/core/database/entities/product-images/product-images-entity.providers';
import { ailmentEntityProviders } from 'src/core/database/entities/ailments/ailment-entity.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { ProductsRepositoryService } from '../products/products-repository.service';
import { subscriptionProductEntityProviders } from 'src/core/database/entities/subscription-products/subscription-product-entity.providers';
import { subscriptionEntityProviders } from 'src/core/database/entities/subscription/subscription-entity.providers';
import { SubscriptionsRepositoryService } from '../shopping/subscriptions-repository.service';
import { SharedModule } from 'src/shared/shared/shared.module';

@Module({
  controllers: [ShoppingCartControllerController],
  providers: [
    ShoppingCartService,
    ShoppingCartRepositoryService,

    ProductsService,
    ProductsRepositoryService,

    SubscriptionsRepositoryService,
  ],
  imports: [
    JwtModule.register(jwtOptions),
    SharedModule,
    AddressModule,
    CardsModule,
    ShoppingModule,
    UsersModule,
  ],
  exports: [ShoppingCartService],
})
export class ShoppingCartModule {}
