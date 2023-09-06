import { Model } from 'sequelize-typescript';
import { UserAilmentsEntity } from '../user-ailments/user-ailments.entity';
export declare class DosingSetupEntity extends Model {
    id: number;
    userAilmentsId: number;
    dose: number;
    firstTake: Date;
    intakePeriod: Date;
    userAilments: UserAilmentsEntity;
}
