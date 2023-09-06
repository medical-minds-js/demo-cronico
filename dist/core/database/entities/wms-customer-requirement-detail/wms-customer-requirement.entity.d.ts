import { Model } from 'sequelize-typescript';
export declare class WmsCustomerRequirementDetailEntity extends Model {
    customerRequirementId: number;
    customerId: number;
    requiredDate: Date;
    remissionsStatus: number;
    folio: number;
    priority: number;
    creationDate: Date;
    userName: number;
}
