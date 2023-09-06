import { CARD_REPOSITORY } from 'src/core/constants';
import { CardEntity } from './cards.entity';

export const cardsEntityProviders = [
  {
    provide: CARD_REPOSITORY,
    useValue: CardEntity,
  },
];
