import { Model } from 'sequelize-typescript';
export declare class MembershipsUsersEntity extends Model {
    id: number;
    membershipsId: number;
    userId: number;
    createdAt: Date;
    expirationDate: number;
    status: number;
    free: number;
}
