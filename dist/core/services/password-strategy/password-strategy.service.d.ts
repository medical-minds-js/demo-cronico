export declare class PasswordStrategyService {
    generatePassword(pass: any, salt: any): string;
    generateSalt(): string;
    validatePassword(pass: string, salt: string, hash: string): boolean;
}
