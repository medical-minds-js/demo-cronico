import { DOSES_TAKEN_REPOSITORY } from 'src/core/constants';
import { DoseTakenEntity } from './dose-taken.entity';

export const doseTakenEntityProviders = [
  {
    provide: DOSES_TAKEN_REPOSITORY,
    useValue: DoseTakenEntity,
  },
];
