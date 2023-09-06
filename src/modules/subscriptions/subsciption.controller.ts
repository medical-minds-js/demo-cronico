import { Body, Controller, Inject, Put, UseGuards } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
import { FailResponse } from 'src/core/clases/fail.response';

@Controller('api/v1/subscription')
export class SubsciptionController {
  @Inject(SubscriptionService)
  private readonly subscriptionService: SubscriptionService;

  @UseGuards(AuthGuard)
  @Put('update/quantity')
  async updateQuantities(
    @Body() request: SubscriptionEntity,
  ): Promise<SuccessResponse> {
    const data = await this.subscriptionService.updateQuantities(request);
    if (data[0] > 0) {
      return new SuccessResponse(data);
    } else {
      if (data[0] < 0) return new FailResponse('Registro no encontrado');
      if (data[0] == 0) return new FailResponse('Error al actualizar');
    }
  }

  @UseGuards(AuthGuard)
  @Put('update/delivery')
  async updateNextDelivery(
    @Body() request: SubscriptionEntity,
  ): Promise<SuccessResponse> {
    const data = await this.subscriptionService.updateNextDelivery(request);
    if (data[0] > 0) {
      return new SuccessResponse(data);
    } else {
      if (data[0] < 0) return new FailResponse('Registro no encontrado');
      if (data[0] == 0) return new FailResponse('Error al actualizar');
    }
  }

  @UseGuards(AuthGuard)
  @Put('update/status')
  async updateStatus(
    @Body() request: SubscriptionEntity,
  ): Promise<SuccessResponse> {
    const data = await this.subscriptionService.updateNextDelivery(request);
    if (data[0] > 0) {
      return new SuccessResponse(data);
    } else {
      if (data[0] < 0) return new FailResponse('Registro no encontrado');
      if (data[0] == 0) return new FailResponse('Error al actualizar');
    }
  }
}
