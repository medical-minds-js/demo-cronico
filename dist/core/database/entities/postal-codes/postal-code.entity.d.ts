import { Model } from 'sequelize-typescript';
export declare class PostalCodeEntity extends Model {
    id: number;
    postalCode: number;
    settlement: string;
    settlementType: string;
    municipality: string;
    state: string;
    keyState: number;
    city: string;
    isActive: number;
}
