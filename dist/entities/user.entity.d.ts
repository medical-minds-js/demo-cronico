import { Model } from 'sequelize-typescript';
export declare class UserEntity extends Model {
    id: number;
    name: string;
    surname: number;
    secondSurname: string;
    userName: string;
    email: string;
    pass: string;
    salt: string;
    createdAt: Date;
}
