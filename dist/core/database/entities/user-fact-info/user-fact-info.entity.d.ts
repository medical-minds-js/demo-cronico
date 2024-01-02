import { Model } from 'sequelize-typescript';
export declare class UserFactInfoEntity extends Model {
    id: number;
    userId: number;
    name: string;
    fiscalName: string;
    rfc: string;
    cp: number;
    state: string;
    location: string;
    street: string;
    suburb: string;
    streetNumber: string;
    interiorNumber: string;
}
