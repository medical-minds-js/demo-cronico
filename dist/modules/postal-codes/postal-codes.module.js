"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodesModule = void 0;
const common_1 = require("@nestjs/common");
const postal_codes_service_1 = require("./postal-codes.service");
const postal_codes_repository_service_1 = require("./postal-codes-repository.service");
const postal_codes_controller_1 = require("./postal-codes.controller");
const shared_module_1 = require("../../shared/shared/shared.module");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const postal_codes_entity_providers_1 = require("../../core/database/entities/postal-codes/postal-codes-entity.providers");
let PostalCodesModule = class PostalCodesModule {
};
PostalCodesModule = __decorate([
    (0, common_1.Module)({
        controllers: [postal_codes_controller_1.PostalCodesController],
        providers: [
            postal_codes_service_1.PostalCodesService,
            postal_codes_repository_service_1.PostalCodesRepositoryService,
            ...postal_codes_entity_providers_1.postalCodesEntityProviders,
        ],
        imports: [shared_module_1.SharedModule, jwt_1.JwtModule.register(constansts_1.jwtOptions)],
    })
], PostalCodesModule);
exports.PostalCodesModule = PostalCodesModule;
//# sourceMappingURL=postal-codes.module.js.map