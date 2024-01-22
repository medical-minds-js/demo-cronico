"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipsModule = void 0;
const common_1 = require("@nestjs/common");
const memberships_controller_1 = require("./memberships.controller");
const memberships_service_1 = require("./memberships.service");
const memberships_repository_service_1 = require("./memberships-repository.service");
const memberships_entity_providers_1 = require("../../core/database/entities/memberships/memberships-entity.providers");
let MembershipsModule = class MembershipsModule {
};
MembershipsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            memberships_service_1.MembershipsService,
            memberships_repository_service_1.MembershipsRepositoryService,
            ...memberships_entity_providers_1.membershipsEntityProviders,
        ],
        controllers: [memberships_controller_1.MembershipsController],
        exports: [memberships_service_1.MembershipsService],
    })
], MembershipsModule);
exports.MembershipsModule = MembershipsModule;
//# sourceMappingURL=memberships.module.js.map