import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { FailResponse } from 'src/core/clases/fail.response';
import { AuthGuard } from '../auth/guard/auth.guard';
@UseGuards(AuthGuard)
@Controller('api/v1/address')
export class AddressController {
  @Inject(AddressService)
  private readonly addressService: AddressService;

  @Get('list')
  async getCartListByUserId(@Request() req): Promise<SuccessListResponse> {
    const data = await this.addressService.findByUserId(req.user.sub);
    return new SuccessListResponse(data);
  }

  @Post('save')
  async addShoppingCart(@Body() body: AddressEntity): Promise<SuccessResponse> {
    const data = await this.addressService.save(body);
    return new SuccessResponse(data);
  }

  @Post('user/active/:addressId')
  async setDefaultCardByUser(
    @Request() req,
    @Param() params,
  ): Promise<SuccessListResponse> {
    await this.addressService.setDefaultByUser(req.user.sub, params.addressId);
    return new SuccessResponse('Dirección actualizada');
  }

  @Put('update')
  async updateShoppingCart(
    @Body() request: AddressEntity,
  ): Promise<SuccessResponse> {
    const data = await this.addressService.updateAddress(request.id, request);
    if (data[0] > 0) {
      return new SuccessResponse('Dirección Actualizada');
    } else {
      if (data[0] < 0) return new FailResponse('Registro no encontrado');
      if (data[0] == 0) return new FailResponse('Error al actualizar');
    }
  }

  @Delete('delete/:addressId')
  async deleteShoppingCart(@Param() params: any): Promise<SuccessResponse> {
    const data = await this.addressService.delete(params.addressId);
    if (data > 0) {
      return new SuccessResponse(data);
    } else {
      if (data < 0) return new FailResponse('Registro no encontrado');
      if (data == 0) return new FailResponse('Error al actualizar');
    }
  }
}
