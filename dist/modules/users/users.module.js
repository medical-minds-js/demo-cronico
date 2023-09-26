"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_repository_service_1 = require("./users-repository.service");
const users_service_1 = require("./users.service");
const shared_module_1 = require("../../shared/shared/shared.module");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const user_ailments_entity_1 = require("../../core/database/entities/user-ailments/user-ailments.entity");
const ailments_service_1 = require("../ailments/ailments.service");
const ailments_repository_service_1 = require("../ailments/ailments-repository.service");
const user_setting_entity_1 = require("../../core/database/entities/user-setting/user-setting.entity");
const user_fact_info_entity_1 = require("../../core/database/entities/user-fact-info/user-fact-info.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            users_repository_service_1.UsersRepositoryService,
            open_pay_service_1.OpenPayService,
            user_ailments_entity_1.UserAilmentsEntity,
            ailments_service_1.AilmentsService,
            ailments_repository_service_1.AilmentsRepositoryService,
            user_setting_entity_1.UserSettingEntity,
            user_fact_info_entity_1.UserFactInfoEntity,
        ],
        imports: [shared_module_1.SharedModule, jwt_1.JwtModule.register(constansts_1.jwtOptions)],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map