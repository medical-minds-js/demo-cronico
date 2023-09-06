import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.interface';
import { AuthService } from './auth.service';
import { AccessToken } from 'src/core/interfaces/acccesss-token.interface';
import { RegisterDto } from './dto/register.dto.interface';

@Controller('api/v1/auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post('/web')
  async getLogin(@Body() loginDto: LoginDto): Promise<AccessToken> {
    const data = await this.authService.login(loginDto);
    return data;
  }

  @Post('/create')
  async saveUser(@Body() params: RegisterDto): Promise<AccessToken> {
    const data = await this.authService.register(params);
    return data;
  }
}
