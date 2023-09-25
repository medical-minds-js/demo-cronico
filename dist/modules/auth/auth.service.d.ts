import { LoginDto } from './dto/login.dto.interface';
import { AccessToken } from 'src/core/interfaces/acccesss-token.interface';
import { RegisterDto } from './dto/register.dto.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly passwordStrategy;
    private readonly sendEmailService;
    register(data: RegisterDto): Promise<AccessToken>;
    login(loginDto: LoginDto): Promise<AccessToken>;
}
