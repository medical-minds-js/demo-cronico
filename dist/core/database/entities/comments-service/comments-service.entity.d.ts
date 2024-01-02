import { Model } from 'sequelize-typescript';
export declare class CommentsServiceEntity extends Model {
    id: number;
    userId: number;
    comment: string;
    qualification: number;
    createdAt: Date;
}
