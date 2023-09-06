import { AILMENTS_IMAGES_REPOSITORY } from 'src/core/constants';
import { AilmentsImageEntity } from './ailment-images.entity';

export const ailmentsImageEntityProviders = [
  {
    provide: AILMENTS_IMAGES_REPOSITORY,
    useValue: AilmentsImageEntity,
  },
];
