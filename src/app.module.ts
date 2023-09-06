import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { join } from 'path';
import { DatabaseModule } from './core/database/database.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { AddressModule } from './modules/address/address.module';
import { DeliveriesTimesModule } from './modules/deliveries-times/deliveries-times.module';
import { SharedModule } from './shared/shared/shared.module';
import { PasswordStrategyService } from './core/services/password-strategy/password-strategy.service';
import { CardsModule } from './modules/cards/cards.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { PostalCodesModule } from './modules/postal-codes/postal-codes.module';
import { AilmentsController } from './modules/ailments/ailments.controller';

import { AilmentsModule } from './modules/ailments/ailments.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      renderPath: '/uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'downloads'),
      serveRoot: '/downloads',
      renderPath: '/downloads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
      renderPath: '/',
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AddressModule,
    ProductsModule,
    ShoppingCartModule,
    AuthModule,
    HomeModule,
    AboutModule,
    DeliveriesTimesModule,
    SharedModule,
    CardsModule,
    ShoppingModule,
    SubscriptionsModule,
    PostalCodesModule,
    AilmentsModule,
  ],
  controllers: [AppController, AilmentsController],
  providers: [AppService, PasswordStrategyService],
})
export class AppModule {}
