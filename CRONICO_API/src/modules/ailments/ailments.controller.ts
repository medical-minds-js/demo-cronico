import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AilmentsService } from './ailments.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { AilmentsFilters } from './interfaces/ailments-filters';

@Controller('api/v1/ailments')
export class AilmentsController {
  @Inject(AilmentsService)
  private readonly ailmentRepository: AilmentsService;

  @Get()
  async viewAll(
    @Query() filters: AilmentsFilters,
  ): Promise<SuccessListResponse> {
    const data = await this.ailmentRepository.viewAll(filters);
    return new SuccessListResponse(data);
  }
}
