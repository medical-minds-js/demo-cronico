import { Inject, Injectable } from '@nestjs/common';
import { CARD_REPOSITORY } from 'src/core/constants';
import { CardEntity } from 'src/core/database/entities/cards/cards.entity';

@Injectable()
export class CardsRepositoryService {
  constructor(
    @Inject(CARD_REPOSITORY)
    private readonly cardsRepository: typeof CardEntity,
  ) {}

  async findCardsByUser(userId: number): Promise<CardEntity[]> {
    return this.cardsRepository.findAll<CardEntity>({
      where: { userId: userId },
    });
  }

  async findActiveCardsByUser(userId: number): Promise<CardEntity> {
    return this.cardsRepository.findOne<CardEntity>({
      where: { userId: userId, active: 1 },
    });
  }

  async saveCardByUser(data: CardEntity) {
    return this.cardsRepository.create<CardEntity>(data as any);
  }

  async disableAllCardsByUser(userId: number) {
    return this.cardsRepository.update<CardEntity>(
      { active: 0 },
      { where: { userId: userId } },
    );
  }

  async setDefaultCardByUser(id: number) {
    return this.cardsRepository.update<CardEntity>(
      { active: 1 },
      { where: { id } },
    );
  }
}
