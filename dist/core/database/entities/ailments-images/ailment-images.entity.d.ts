import { Model } from 'sequelize-typescript';
import { AilmentEntity } from '../ailments/ailment.entity';
export declare class AilmentsImageEntity extends Model {
    id: number;
    ailmentsId: number;
    url: string;
    ailments: AilmentEntity;
}
