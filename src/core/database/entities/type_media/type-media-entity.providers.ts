import { TYPE_MEDIA_REPOSITORY } from 'src/core/constants';
import { TypeMediaEntity } from './type-media.entity';

export const userEntityProviders = [
  {
    provide: TYPE_MEDIA_REPOSITORY,
    useValue: TypeMediaEntity,
  },
];
