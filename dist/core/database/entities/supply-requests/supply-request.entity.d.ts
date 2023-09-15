import { Model } from 'sequelize-typescript';
export declare class SupplyRequestEntity extends Model {
    id: number;
    name: number;
    email: number;
    supply: string;
    message: string;
    reason: string;
    createdAt: Date;
}
