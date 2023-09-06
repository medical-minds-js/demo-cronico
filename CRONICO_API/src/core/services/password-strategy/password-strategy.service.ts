import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class PasswordStrategyService {
  generatePassword(pass, salt): string {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(pass);
    return hash.digest('hex');
  }

  generateSalt(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  validatePassword(pass: string, salt: string, hash: string): boolean {
    return this.generatePassword(pass, salt) === hash;
  }
}
