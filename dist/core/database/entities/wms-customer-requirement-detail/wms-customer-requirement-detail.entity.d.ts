import { Model } from 'sequelize-typescript';
export declare class WmsCustomerRequirementDetailEntity extends Model {
    customerRequirementDetailId: number;
    customerRequirementId: number;
    shortKey: string;
    quantity: number;
    quantityConfirmed: number;
    status: number;
    remissionStatus: number;
    comments: number;
}
