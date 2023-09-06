import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeliveriesTimesService } from './deliveries-times.service';
import { FailResponse } from 'src/core/clases/fail.response';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';

@Controller('api/v1/deliveries-times')
export class DeliveriesTimesController {
  @Inject(DeliveriesTimesService)
  private readonly deliveriesTimesService: DeliveriesTimesService;

  @Get('list')
  async getCartListByUserId(): Promise<SuccessListResponse> {
    const data = await this.deliveriesTimesService.getDeliveriesTimesList();
    return new SuccessListResponse(data);
  }

  @Post('save')
  async addShoppingCart(
    @Body() body: DeliveryTimeEntity,
  ): Promise<SuccessResponse> {
    const data = await this.deliveriesTimesService.save(body);
    return new SuccessResponse(data);
  }

  @Put('update')
  async updateDeliveryTime(
    @Body() request: DeliveryTimeEntity,
  ): Promise<SuccessResponse> {
    const data = await this.deliveriesTimesService.updateDeliveryTime(
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

  @Delete('delete:deliveryId')
  async deleteShoppingCart(@Param() params: any): Promise<SuccessResponse> {
    const data = await this.deliveriesTimesService.delete(params.deliveryId);
    if (data > 0) {
      return new SuccessResponse(data);
    } else {
      if (data < 0) return new FailResponse('Registro no encontrado');
      if (data == 0) return new FailResponse('Error al actualizar');
    }
  }
}
