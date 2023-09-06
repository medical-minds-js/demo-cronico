import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from 'src/shared/shared/shared.module';
import { supplyRequestEntityProviders } from 'src/core/database/entities/supply-requests/supply-request-entity.providers';
import { HomeRepositoryService } from './home-reposiory.service';

@Module({
  imports: [ProductsModule, SharedModule],
  controllers: [HomeController],
  providers: [
    HomeService,
    ...supplyRequestEntityProviders,
    HomeRepositoryService,
  ],
  exports: [HomeService],
})
export class HomeModule {}
