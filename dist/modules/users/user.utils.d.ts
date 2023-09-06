import { User } from 'src/modules/users/interfaces/user.interface';
import { UserLogin } from '../auth/interface/user-login.interface';
export declare function UserMapper(user: any): User;
export declare function UserLoginMapper(user: any, token: any): UserLogin;
