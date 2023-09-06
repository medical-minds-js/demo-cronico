import { UserEntity } from 'src/entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    findAll(): Promise<UserEntity[]>;
}
