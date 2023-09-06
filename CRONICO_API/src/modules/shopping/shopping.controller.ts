import {
  Controller,
  Inject,
  Get,
  Param,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { ShoppingService } from './shopping.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { Pagination } from 'src/core/interfaces/pagination.interface';
import { SuccessResponse } from 'src/core/clases/success.response';

@UseGuards(AuthGuard)
@Controller('api/v1/shopping')
export class ShoppingController {
  @Inject(ShoppingService)
  private readonly shoppingService: ShoppingService;

  @Get('list')
  async getListShoppping(
    @Request() req,
    @Query() options: Pagination,
  ): Promise<SuccessListResponse> {
    const data = await this.shoppingService.getListShoppping(
      req.user.sub,
      options,
    );
    return new SuccessListResponse(data);
  }

  @Get(':id')
  async getShoppping(
    @Request() req,
    @Param() params,
  ): Promise<SuccessListResponse> {
    const data = await this.shoppingService.getShopingById(params.id);
    return new SuccessResponse(data);
  }

  @Get('order/:id/card')
  async getInfoShoppping(
    @Request() req,
    @Param() params,
  ): Promise<SuccessResponse> {
    const data = await this.shoppingService.getOrderCard(
      req.user.sub,
      params.id,
    );
    return new SuccessResponse(data);
  }

  @Get('subscriptions/list')
  async getSubscriptionsByUserId(@Request() req): Promise<SuccessListResponse> {
    const data = await this.shoppingService.findSuscriptionsByUserId(
      req.user.sub,
    );
    return new SuccessListResponse(data);
  }

  @Get('orders/list')
  async getOrdersByUserId(@Request() req): Promise<SuccessListResponse> {
    const data = await this.shoppingService.findOrdersByUserId(req.user.sub);
    return new SuccessListResponse(data);
  }
}
