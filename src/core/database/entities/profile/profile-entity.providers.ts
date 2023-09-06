import { PROFILE_REPOSITORY } from 'src/core/constants';
import { ProfileEntity } from './profile.entity';

export const userEntityProviders = [
  {
    provide: PROFILE_REPOSITORY,
    useValue: ProfileEntity,
  },
];
