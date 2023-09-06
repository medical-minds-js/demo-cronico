import { Inject, Injectable } from '@nestjs/common';
import { CardsRepositoryService } from './cards-repository.service';
import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
import { OpenPayService } from 'src/core/services/open-pay/open-pay.service';
import { UsersService } from '../users/users.service';
import { CreateCardDto } from './interfaces/create-card.dto.interface';
import { CardMapper } from 'src/core/services/open-pay/open-pay.utils';

@Injectable()
export class CardsService {
  @Inject(CardsRepositoryService)
  private readonly cardsRepositoryService: CardsRepositoryService;

  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Inject(OpenPayService)
  private readonly openPayService: OpenPayService;

  async getCardsByUser(userId: number) {
    const user = await this.usersService.getById(userId);
    const items = await this.cardsRepositoryService.findCardsByUser(userId);
    const cards = await this.openPayService.getCardsByUser(user.openPayId);
    return items
      .map((item) => {
        const card = cards.find((card) => card.id === item.cardOpenPayId);
        if (!card) return;
        return { ...CardMapper(card), active: item.active, id: item.id };
      })
      .filter((i) => i);
  }

  async getActiveByUser(userId: number) {
    return this.cardsRepositoryService.findActiveCardsByUser(userId);
  }

  async saveCardByUser(userId: number, card: CreateCardDto) {
    await this.cardsRepositoryService.disableAllCardsByUser(userId);
    await this.cardsRepositoryService.saveCardByUser({
      ...card,
      userId,
    } as any);
    const user = await this.usersService.getById(userId);
    await this.openPayService.addCardToCustomer(user.openPayId, {
      token_id: card.cardOpenPayId,
      device_session_id: card.deviceSession,
    });
    return 'Tarjeta guardada';
  }

  async setDefaultCardByUser(userId: number, cardId: number) {
    await this.cardsRepositoryService.disableAllCardsByUser(userId);
    await this.cardsRepositoryService.setDefaultCardByUser(cardId);
    return 'Tarjeta guardada';
  }
}
