import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
import { FailResponse } from 'src/core/clases/fail.response';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';

@Controller('api/v1/shopping-cart')
export class ShoppingCartControllerController {
  @Inject(ShoppingCartService)
  private readonly shoppingCartService: ShoppingCartService;
  @UseGuards(AuthGuard)
  @Get('list/:userId')
  async getCartListByUserId(
    @Param() params: any,
  ): Promise<SuccessListResponse> {
    const data = await this.shoppingCartService.findByUserId(params.userId);
    return new SuccessListResponse(data);
  }

  @UseGuards(AuthGuard)
  @Post('save')
  async addShoppingCart(
    @Body() body: ShoppingCartEntity,
    @Request() req,
  ): Promise<SuccessResponse> {
    const data = await this.shoppingCartService.save(req.user.sub, body);
    return new SuccessResponse(data);
  }

  @UseGuards(AuthGuard)
  @Put('update')
  async updateShoppingCart(
    @Body() request: ShoppingCartEntity,
    @Request() req,
  ): Promise<SuccessResponse> {
    const data = await this.shoppingCartService.updateCart(
      req.user.sub,
      request.id,
      request,
    );
    if (data[0] > 0) {
      return new SuccessResponse(data);
    } else {
      if (data[0] < 0) return new FailResponse('Registro no encontrado');
      if (data[0] == 0) return new FailResponse('Error al actualizar');
    }
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:shoppingCartId')
  async deleteShoppingCart(@Param() params: any): Promise<SuccessResponse> {
    const data = await this.shoppingCartService.delete(params.shoppingCartId);
    if (data > 0) {
      return new SuccessResponse(data);
    } else {
      if (data < 0) return new FailResponse('Registro no encontrado');
      if (data == 0) return new FailResponse('Error al actualizar');
    }
  }

  @UseGuards(AuthGuard)
  @Post('confirm-order')
  async confirmOrder(
    @Request() req,
    @Body() confirmOrder: ConfirmOrder,
  ): Promise<SuccessResponse> {
    const data = await this.shoppingCartService.confirmOrder(
      req.user.sub,
      confirmOrder,
    );
    return new SuccessResponse('Orden confirmada');
  }
}
