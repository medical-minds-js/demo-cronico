import { Model } from 'sequelize-typescript';
export declare class UserFactInfoEntity extends Model {
    id: number;
    userId: number;
    name: string;
    fiscalName: string;
    fiscalAddress: string;
    fiscalNumber: string;
}
