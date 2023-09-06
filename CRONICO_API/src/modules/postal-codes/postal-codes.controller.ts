import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guard/auth.guard';
import { PostalCodesService } from './postal-codes.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { FailResponse } from 'src/core/clases/fail.response';

@UseGuards(AuthGuard)
@Controller('api/v1/postal-codes')
export class PostalCodesController {
  @Inject(PostalCodesService)
  private readonly cpService: PostalCodesService;

  @Get('list/:code')
  async getActivePostalCodes(
    @Param() params: any,
  ): Promise<SuccessListResponse> {
    const data = await this.cpService.getAll(params.code);
    if (data.length > 0) {
      return new SuccessListResponse(data);
    }
    return new FailResponse('Código postal no encontrado');
  }
}
