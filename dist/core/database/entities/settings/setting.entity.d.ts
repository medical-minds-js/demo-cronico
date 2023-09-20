import { Model } from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
export declare class SettingEntity extends Model {
    id: number;
    code: string;
    users: UserEntity[];
}
