import {
  Controller,
  Get,
  Inject,
  UseGuards,
  Request,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CardsService } from './cards.service';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { CreateCardDto } from './interfaces/create-card.dto.interface';

@UseGuards(AuthGuard)
@Controller('api/v1/cards')
export class CardsController {
  @Inject(CardsService)
  private readonly cardsService: CardsService;

  @Get('user')
  async cardsByUser(@Request() req): Promise<SuccessListResponse> {
    const data = await this.cardsService.getCardsByUser(req.user.sub);
    return new SuccessListResponse(data);
  }

  @Post('user')
  async createCard(
    @Request() req,
    @Body() card: CreateCardDto,
  ): Promise<SuccessListResponse> {
    const data = await this.cardsService.saveCardByUser(req.user.sub, card);
    return new SuccessResponse(data);
  }

  @Post('user/active/:id')
  async setDefaultCardByUser(
    @Request() req,
    @Param() params,
  ): Promise<SuccessListResponse> {
    const data = await this.cardsService.setDefaultCardByUser(
      req.user.sub,
      params.id,
    );
    return new SuccessResponse(data);
  }
}
