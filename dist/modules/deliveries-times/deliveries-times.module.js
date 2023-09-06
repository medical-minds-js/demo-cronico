"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveriesTimesModule = void 0;
const common_1 = require("@nestjs/common");
const deliveries_times_service_1 = require("./deliveries-times.service");
const deliveries_times_repository_service_1 = require("./deliveries-times-repository.service");
const deliveries_times_controller_1 = require("./deliveries-times.controller");
const deliveries_times_entity_providers_1 = require("../../core/database/entities/deliveries-times/deliveries-times-entity.providers");
let DeliveriesTimesModule = class DeliveriesTimesModule {
};
DeliveriesTimesModule = __decorate([
    (0, common_1.Module)({
        providers: [
            deliveries_times_service_1.DeliveriesTimesService,
            deliveries_times_repository_service_1.DeliveryTimesRepositoryService,
            ...deliveries_times_entity_providers_1.deliveriesTimesEntityProviders,
        ],
        controllers: [deliveries_times_controller_1.DeliveriesTimesController],
        exports: [deliveries_times_repository_service_1.DeliveryTimesRepositoryService],
    })
], DeliveriesTimesModule);
exports.DeliveriesTimesModule = DeliveriesTimesModule;
//# sourceMappingURL=deliveries-times.module.js.map