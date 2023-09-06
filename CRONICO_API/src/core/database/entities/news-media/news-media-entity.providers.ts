import { NEWS_MEDIA_REPOSITORY } from 'src/core/constants';
import { NewsMediaEntity } from './news-media.entity';

export const userEntityProviders = [
  {
    provide: NEWS_MEDIA_REPOSITORY,
    useValue: NewsMediaEntity,
  },
];
