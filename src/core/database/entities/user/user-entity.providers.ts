import { USER_REPOSITORY } from 'src/core/constants';
import { UserEntity } from './user.entity';

export const userEntityProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: UserEntity,
  },
];
