import { Model } from 'sequelize-typescript';
export declare class UserSettingEntity extends Model {
    id: number;
    userId: number;
    settingId: number;
    value: string;
}
