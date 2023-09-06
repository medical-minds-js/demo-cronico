import { USER_AILMENTS_REPOSITORY } from 'src/core/constants';
import { UserAilmentsEntity } from './user-ailments.entity';

export const userAilmentsEntityProviders = [
  {
    provide: USER_AILMENTS_REPOSITORY,
    useValue: UserAilmentsEntity,
  },
];
