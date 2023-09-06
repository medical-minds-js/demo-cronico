import { POSTAL_CODES_REPOSITORY } from 'src/core/constants';
import { PostalCodeEntity } from './postal-code.entity';

export const postalCodesEntityProviders = [
  {
    provide: POSTAL_CODES_REPOSITORY,
    useValue: PostalCodeEntity,
  },
];
