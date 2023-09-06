"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const fail_response_1 = require("../../core/clases/fail.response");
const jwt_1 = require("@nestjs/jwt");
const password_strategy_service_1 = require("../../core/services/password-strategy/password-strategy.service");
let AuthService = class AuthService {
    async register(data) {
        const previous = await this.usersService.findUserByEmail(data.email);
        if (previous) {
            throw new fail_response_1.FailResponse('El usuario ya esta registrado');
        }
        const randomSalt = this.passwordStrategy.generateSalt();
        const hassPass = this.passwordStrategy.generatePassword(data.pass, randomSalt);
        const user = await this.usersService.saveRegister(Object.assign(Object.assign({}, data), { profileId: 1, pass: hassPass, salt: randomSalt }));
        const payload = { sub: user.id, username: user.userName };
        const token = await this.jwtService.sign(payload);
        return { access_token: token };
    }
    async login(loginDto) {
        const user = await this.usersService.findUserByEmail(loginDto.email);
        if (!user) {
            throw new fail_response_1.FailResponse('El usuario no esta registrado');
        }
        const isValid = this.passwordStrategy.validatePassword(loginDto.pass, user.salt, user.pass);
        if (!isValid) {
            throw new fail_response_1.FailResponse('La contraseña es incorrecta');
        }
        const payload = { sub: user.id, username: user.userName };
        const token = await this.jwtService.sign(payload);
        return { access_token: token };
    }
};
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], AuthService.prototype, "usersService", void 0);
__decorate([
    (0, common_1.Inject)(jwt_1.JwtService),
    __metadata("design:type", jwt_1.JwtService)
], AuthService.prototype, "jwtService", void 0);
__decorate([
    (0, common_1.Inject)(password_strategy_service_1.PasswordStrategyService),
    __metadata("design:type", password_strategy_service_1.PasswordStrategyService)
], AuthService.prototype, "passwordStrategy", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map