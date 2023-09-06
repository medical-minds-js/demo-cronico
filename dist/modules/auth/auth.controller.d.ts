import { LoginDto } from './dto/login.dto.interface';
import { AccessToken } from 'src/core/interfaces/acccesss-token.interface';
import { RegisterDto } from './dto/register.dto.interface';
export declare class AuthController {
    private readonly authService;
    getLogin(loginDto: LoginDto): Promise<AccessToken>;
    saveUser(params: RegisterDto): Promise<AccessToken>;
}
