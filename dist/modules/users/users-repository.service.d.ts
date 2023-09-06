import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { LoginDto } from '../auth/dto/login.dto.interface';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { UserAilmentsEntity } from 'src/core/database/entities/user-ailments/user-ailments.entity';
import { DoseTakenEntity } from 'src/core/database/entities/doses_taken/dose-taken.entity';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';
export declare class UsersRepositoryService {
    private readonly userRepository;
    private readonly ailmentsRepository;
    private readonly userAilmentsRepository;
    private readonly userAilmentsProductsRepository;
    private readonly doseTakenRepository;
    constructor(userRepository: typeof UserEntity, ailmentsRepository: typeof AilmentEntity, userAilmentsRepository: typeof UserAilmentsEntity, userAilmentsProductsRepository: typeof UserAilmentsProductEntity, doseTakenRepository: typeof DoseTakenEntity);
    findAll(): Promise<UserEntity[]>;
    findOneById(id: number): Promise<UserEntity>;
    findLogin(loginDto: LoginDto): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    save(data: UserEntity): Promise<UserEntity>;
    update(data: UserEntity): Promise<number[]>;
    updateOpenPayId(userId: any, openPayId: any): Promise<[affectedCount: number]>;
    findAilments(userId: any): Promise<any>;
    getProductsAilments(id: any): Promise<any>;
    getProductByUserAilments(id: any): Promise<UserAilmentsProductEntity>;
    updateProductByUserAilments(id: number, data: UserAilmentsProductEntity): Promise<[affectedCount: number]>;
    addAilments(data: UserAilmentsEntity): Promise<UserAilmentsEntity>;
    getUserAilments(id: number): Promise<UserAilmentsEntity>;
    viewDoseTakenByDate(userAilmentsId: number): Promise<DoseTakenEntity[]>;
    createDoseTaken(data: DoseTakenEntity): Promise<DoseTakenEntity>;
}
