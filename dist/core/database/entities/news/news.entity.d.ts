import { Model } from 'sequelize-typescript';
export declare class NewsEntity extends Model {
    id: number;
    title: string;
    description: number;
    text: string;
    createdAt: Date;
}
