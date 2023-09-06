import { UserEntity } from 'src/entities/user.entity';
export declare class UsersRepositoryService {
    private readonly userRepository;
    constructor(userRepository: typeof UserEntity);
    findAll(): Promise<UserEntity[]>;
    findOneById(id: number): Promise<UserEntity>;
}
