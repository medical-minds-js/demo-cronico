import {
  Controller,
  Get,
  Inject,
  Request,
  UseGuards,
  Body,
  Put,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { AuthGuard } from '../auth/guard/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { AilmentsFilters } from '../ailments/interfaces/ailments-filters';
import { AilmentsService } from '../ailments/ailments.service';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';

@UseGuards(AuthGuard)
@Controller('api/v1/user')
export class UsersController {
  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Inject(AilmentsService)
  private readonly ailmentsService: AilmentsService;

  @Get('/data')
  async getUser(@Request() req): Promise<SuccessResponse> {
    const data = await this.usersService.findOneById(req.user.sub);
    return new SuccessResponse(data);
  }

  @Put('/data/update')
  async updateUser(@Body() req): Promise<SuccessResponse> {
    await this.usersService.updateRegister(req);
    return new SuccessResponse('Registro actualizado');
  }

  @Post('/images/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
      }),
    }),
  )
  async addUserImage(
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return file;
  }

  @Post('/account/active-payment')
  async activePayment(@Request() req): Promise<SuccessResponse> {
    const data = await this.usersService.activePayment(req.user.sub);
    return new SuccessResponse(data);
  }

  @Post('/account/payment-id')
  async getPaymentId(@Request() req): Promise<SuccessResponse> {
    const data = await this.usersService.getPaymentId(req.user.sub);
    return new SuccessResponse(data);
  }

  @Get('/ailments')
  async getAilments(
    @Request() req,
    @Query() filters: AilmentsFilters,
  ): Promise<SuccessListResponse> {
    const list = await this.usersService.getUserAilments(req.user.sub, filters);
    return new SuccessListResponse(list);
  }

  @Post('/ailments')
  async addAilments(
    @Request() req,
    @Body() ailments: AilmentEntity,
  ): Promise<SuccessListResponse> {
    const data = await this.usersService.addAilments(req.user.sub, ailments);
    return new SuccessResponse(data);
  }

  @Get('/ailments/:id/show')
  async getDoseByAilments(
    @Request() req,
    @Param() params,
  ): Promise<SuccessListResponse> {
    const data = await this.usersService.getFullUserAilments(params.id);
    return new SuccessResponse(data);
  }

  @Post('/ailments/:id/config-take')
  async configUserAilmentsProduct(
    @Param() params,
    @Body() data: UserAilmentsProductEntity,
  ): Promise<SuccessListResponse> {
    const result = await this.usersService.configUserAilmentsProduct(
      params.id,
      data,
    );
    return new SuccessResponse('Actualizado');
  }

  @Post('/ailments/:id/dose')
  async createDoseByAilments(
    @Request() req,
    @Body() data: UserAilmentsProductEntity,
  ): Promise<SuccessListResponse> {
    const result = await this.usersService.createDoseTaken(data);
    return new SuccessResponse(result);
  }
}
