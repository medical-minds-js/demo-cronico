import { Model } from 'sequelize-typescript';
export declare class NewsMediaEntity extends Model {
    id: number;
    newsId: number;
    typeMediaId: number;
    source: string;
    createdAt: Date;
}
