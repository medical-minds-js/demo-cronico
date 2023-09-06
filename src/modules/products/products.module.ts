import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepositoryService } from './products-repository.service';
import { productEntityProviders } from 'src/core/database/entities/product/product-entity.providers';
import { ailmentEntityProviders } from 'src/core/database/entities/ailments/ailment-entity.providers';
import { productImageEntityProviders } from 'src/core/database/entities/product-images/product-images-entity.providers';
import { databaseProviders } from 'src/core/database/database.providers';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsRepositoryService,
    ...productEntityProviders,
    ...productImageEntityProviders,
    ...ailmentEntityProviders,
    ...databaseProviders,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
