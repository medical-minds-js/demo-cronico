import { Model } from 'sequelize-typescript';
import { UserAilmentsEntity } from '../user-ailments/user-ailments.entity';
import { DoseTakenEntity } from '../doses_taken/dose-taken.entity';
export declare class UserAilmentsProductEntity extends Model {
    id: number;
    userAilmentsId: number;
    productId: number;
    dose: number;
    initialDate: number;
    intakePeriod: Date;
    firstTake: Date;
    userAilments: UserAilmentsEntity;
    doseTaken: DoseTakenEntity[];
}
