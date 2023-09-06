import { NEWS_REPOSITORY } from 'src/core/constants';
import { NewsEntity } from './news.entity';

export const userEntityProviders = [
  {
    provide: NEWS_REPOSITORY,
    useValue: NewsEntity,
  },
];
