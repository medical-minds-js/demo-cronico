import { Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { ProductsService } from './products.service';
import { SuccessResponse } from 'src/core/clases/success.response';
import { ProductFilters } from './interfaces/product-filters';

@Controller('api/v1/products')
export class ProductsController {
  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  @Get()
  async getProducts(
    @Query() filters: ProductFilters,
  ): Promise<SuccessListResponse> {
    const data = await this.productsService.getProducts(filters);
    return new SuccessListResponse(data);
  }

  @Get(':id')
  async getProductById(@Param() params: any): Promise<SuccessResponse> {
    const data = await this.productsService.getProductById(params.id);
    return new SuccessResponse(data);
  }
}
