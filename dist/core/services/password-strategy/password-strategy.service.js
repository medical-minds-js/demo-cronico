"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordStrategyService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
let PasswordStrategyService = class PasswordStrategyService {
    generatePassword(pass, salt) {
        const hash = crypto.createHmac('sha512', salt);
        hash.update(pass);
        return hash.digest('hex');
    }
    generateSalt() {
        return crypto.randomBytes(16).toString('hex');
    }
    validatePassword(pass, salt, hash) {
        return this.generatePassword(pass, salt) === hash;
    }
};
PasswordStrategyService = __decorate([
    (0, common_1.Injectable)()
], PasswordStrategyService);
exports.PasswordStrategyService = PasswordStrategyService;
//# sourceMappingURL=password-strategy.service.js.map