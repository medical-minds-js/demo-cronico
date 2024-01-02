"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
const home_controller_1 = require("./home.controller");
const products_module_1 = require("../products/products.module");
const shared_module_1 = require("../../shared/shared/shared.module");
const supply_request_entity_providers_1 = require("../../core/database/entities/supply-requests/supply-request-entity.providers");
const home_reposiory_service_1 = require("./home-reposiory.service");
const comments_module_1 = require("../comments/comments.module");
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    (0, common_1.Module)({
        imports: [products_module_1.ProductsModule, shared_module_1.SharedModule, comments_module_1.CommentsModule],
        controllers: [home_controller_1.HomeController],
        providers: [
            home_service_1.HomeService,
            ...supply_request_entity_providers_1.supplyRequestEntityProviders,
            home_reposiory_service_1.HomeRepositoryService,
        ],
        exports: [home_service_1.HomeService],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map