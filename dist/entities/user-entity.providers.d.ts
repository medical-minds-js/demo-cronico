import { UserEntity } from '../core/database/entities/user/user.entity';
export declare const usersProviders: {
    provide: string;
    useValue: typeof UserEntity;
}[];
