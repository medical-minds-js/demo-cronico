import { Model } from 'sequelize-typescript';
export declare class MembershipsEntity extends Model {
    id: number;
    membershipsType: number;
    name: string;
    periodo: string;
    days: number;
    benefies: string;
    cost: number;
    totals: number;
    delivered: number;
    freeDays: number;
    listBenefies: string[];
}
