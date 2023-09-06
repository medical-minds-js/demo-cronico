"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AilmentsModule = void 0;
const common_1 = require("@nestjs/common");
const ailments_service_1 = require("./ailments.service");
const ailments_repository_service_1 = require("./ailments-repository.service");
const ailment_entity_providers_1 = require("../../core/database/entities/ailments/ailment-entity.providers");
const ailments_controller_1 = require("./ailments.controller");
let AilmentsModule = class AilmentsModule {
};
AilmentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [ailments_controller_1.AilmentsController],
        providers: [
            ailments_service_1.AilmentsService,
            ailments_repository_service_1.AilmentsRepositoryService,
            ...ailment_entity_providers_1.ailmentEntityProviders,
        ],
        exports: [ailments_service_1.AilmentsService],
    })
], AilmentsModule);
exports.AilmentsModule = AilmentsModule;
//# sourceMappingURL=ailments.module.js.map