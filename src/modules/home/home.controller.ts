import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { HomeService } from './home.service';
import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';

@Controller('api/v1/home')
export class HomeController {
  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  @Inject(HomeService)
  private readonly homeService: HomeService;

  @Get('main-product')
  async getMainProduct(): Promise<SuccessResponse> {
    const data = await this.productsService.getHomePrincipalProduct();
    return new SuccessResponse(data);
  }

  @Get('main-package')
  async getMainPackage(): Promise<SuccessResponse> {
    const data = await this.productsService.getHomePrincipalPackage();
    return new SuccessResponse(data);
  }

  @Get('new-products')
  async getNewProducts(): Promise<SuccessListResponse> {
    const data = await this.productsService.getNewProducts();
    return new SuccessListResponse(data);
  }

  @Get('video')
  async getHomeVideo(): Promise<SuccessListResponse> {
    const data = await this.homeService.getHomeVideo();
    return new SuccessResponse(data);
  }

  @Get('about-us')
  async getAboutUs(): Promise<SuccessListResponse> {
    const data = await this.homeService.getAboutUs();
    return new SuccessResponse(data);
  }

  @Get('benefits')
  async getBenefits(): Promise<SuccessListResponse> {
    const data = await this.homeService.getBenefits();
    return new SuccessListResponse(data);
  }

  @Get('social-cause')
  async getSocialCause(): Promise<SuccessListResponse> {
    const data = await this.homeService.getSocialCause();
    return new SuccessResponse(data);
  }

  @Get('testimonials')
  async getTestimonials(): Promise<SuccessListResponse> {
    const data = await this.homeService.getTestimonials();
    return new SuccessListResponse(data);
  }

  @Post('request-supply')
  async createRequestSupply(
    @Body() data: SupplyRequestEntity,
  ): Promise<SuccessListResponse> {
    const result = await this.homeService.createRequestSupply(data);
    return new SuccessResponse(result);
  }
}
