import { AILMENT_REPOSITORY } from 'src/core/constants';
import { AilmentEntity } from './ailment.entity';

export const ailmentEntityProviders = [
  {
    provide: AILMENT_REPOSITORY,
    useValue: AilmentEntity,
  },
];
