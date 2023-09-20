import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { User } from 'src/modules/users/interfaces/user.interface';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { UserAilmentsEntity } from 'src/core/database/entities/user-ailments/user-ailments.entity';
import { AilmentsFilters } from '../ailments/interfaces/ailments-filters';
import { DoseTakenEntity } from 'src/core/database/entities/doses_taken/dose-taken.entity';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';
import { AilmentAdd } from './interfaces/ailmentAdd.interface';
import { UserSettingEntity } from 'src/core/database/entities/user-setting/user-setting.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly openPayService;
    private readonly ailmentsService;
    findAll(): Promise<User[]>;
    findOneById(id: number): Promise<User>;
    getById(id: number): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    saveRegister(user: UserEntity): Promise<User>;
    updateRegister(user: UserEntity): Promise<number[]>;
    activePayment(userId: number): Promise<string>;
    getPaymentId(userId: number): Promise<string>;
    getUserAilments(userId: number, filters: AilmentsFilters): Promise<AilmentEntity[]>;
    addAilments(userId: number, ailments: AilmentAdd): Promise<UserAilmentsEntity>;
    getFullUserAilments(id: any): Promise<any>;
    configUserAilmentsProduct(id: number, data: UserAilmentsProductEntity): Promise<void>;
    createDoseTaken(info: UserAilmentsProductEntity): Promise<DoseTakenEntity>;
    getSettings(id: number): Promise<{
        id: any;
        settingId: any;
        code: any;
        value: any;
    }[]>;
    saveSettings(userId: number, data: any): Promise<UserSettingEntity>;
    updateSetting(id: number, data: any): Promise<UserSettingEntity>;
}
