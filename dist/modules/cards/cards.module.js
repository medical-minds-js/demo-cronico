"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModule = void 0;
const common_1 = require("@nestjs/common");
const cards_service_1 = require("./cards.service");
const cards_controller_1 = require("./cards.controller");
const cards_repository_service_1 = require("./cards-repository.service");
const cards_entity_providers_1 = require("../../core/database/entities/cards/cards-entity.providers");
const shared_module_1 = require("../../shared/shared/shared.module");
const constansts_1 = require("../auth/constansts");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            cards_service_1.CardsService,
            cards_repository_service_1.CardsRepositoryService,
            ...cards_entity_providers_1.cardsEntityProviders,
            open_pay_service_1.OpenPayService,
        ],
        controllers: [cards_controller_1.CardsController],
        exports: [cards_service_1.CardsService],
        imports: [shared_module_1.SharedModule, jwt_1.JwtModule.register(constansts_1.jwtOptions), users_module_1.UsersModule],
    })
], CardsModule);
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map