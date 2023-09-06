import { Model } from 'sequelize-typescript';
export declare class WmsCustomerRequirementEntity extends Model {
    customerRequirementId: number;
    customerId: number;
    requiredDate: Date;
    remissionsStatus: number;
    folio: number;
    priority: number;
    creationDate: Date;
    type: number;
}
