import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto.interface';
import { AccessToken } from 'src/core/interfaces/acccesss-token.interface';
import { RegisterDto } from './dto/register.dto.interface';
import { FailResponse } from 'src/core/clases/fail.response';
import { JwtService } from '@nestjs/jwt';
import { PasswordStrategyService } from 'src/core/services/password-strategy/password-strategy.service';

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Inject(PasswordStrategyService)
  private readonly passwordStrategy: PasswordStrategyService;

  async register(data: RegisterDto): Promise<AccessToken> {
    const previous = await this.usersService.findUserByEmail(data.email);
    if (previous) {
      throw new FailResponse('El usuario ya esta registrado');
    }
    const randomSalt = this.passwordStrategy.generateSalt();
    const hassPass = this.passwordStrategy.generatePassword(
      data.pass,
      randomSalt,
    );
    const user = await this.usersService.saveRegister({
      ...data,
      profileId: 1,
      pass: hassPass,
      salt: randomSalt,
    } as any);
    const payload = { sub: user.id, username: user.userName };
    const token = await this.jwtService.sign(payload);
    return { access_token: token };
  }

  async login(loginDto: LoginDto): Promise<AccessToken> {
    const user = await this.usersService.findUserByEmail(loginDto.email);
    if (!user) {
      throw new FailResponse('El usuario no esta registrado');
    }
    const isValid = this.passwordStrategy.validatePassword(
      loginDto.pass,
      user.salt,
      user.pass,
    );
    if (!isValid) {
      throw new FailResponse('La contraseña es incorrecta');
    }
    const payload = { sub: user.id, username: user.userName };
    const token = await this.jwtService.sign(payload);
    return { access_token: token };
  }
}
