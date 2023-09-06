"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../users/users.service");
const users_repository_service_1 = require("../users/users-repository.service");
const shared_module_1 = require("../../shared/shared/shared.module");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("./constansts");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const ailments_service_1 = require("../ailments/ailments.service");
const ailments_repository_service_1 = require("../ailments/ailments-repository.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            users_service_1.UsersService,
            users_repository_service_1.UsersRepositoryService,
            open_pay_service_1.OpenPayService,
            ailments_service_1.AilmentsService,
            ailments_repository_service_1.AilmentsRepositoryService,
        ],
        exports: [auth_service_1.AuthService],
        imports: [shared_module_1.SharedModule, jwt_1.JwtModule.register(constansts_1.jwtOptions), shared_module_1.SharedModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map