"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModule = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const address_controller_1 = require("./address.controller");
const address_repository_service_1 = require("./address-repository.service");
const address_entity_providers_1 = require("../../core/database/entities/address/address-entity.providers");
const deliveries_times_module_1 = require("../deliveries-times/deliveries-times.module");
const shared_module_1 = require("../../shared/shared/shared.module");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const address_deliveries_times_entity_providers_1 = require("../../core/database/entities/address-deliveries-times/address-deliveries-times-entity.providers");
const deliveries_times_entity_providers_1 = require("../../core/database/entities/deliveries-times/deliveries-times-entity.providers");
let AddressModule = class AddressModule {
};
AddressModule = __decorate([
    (0, common_1.Module)({
        controllers: [address_controller_1.AddressController],
        providers: [
            address_service_1.AddressService,
            address_repository_service_1.AddressRepositoryService,
            ...address_entity_providers_1.addressEntityProviders,
            ...address_deliveries_times_entity_providers_1.addressDeliveriesTimesEntityProviders,
            ...deliveries_times_entity_providers_1.deliveriesTimesEntityProviders,
        ],
        exports: [address_service_1.AddressService],
        imports: [
            deliveries_times_module_1.DeliveriesTimesModule,
            shared_module_1.SharedModule,
            jwt_1.JwtModule.register(constansts_1.jwtOptions),
        ],
    })
], AddressModule);
exports.AddressModule = AddressModule;
//# sourceMappingURL=address.module.js.map