"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./products.controller");
const products_service_1 = require("./products.service");
const products_repository_service_1 = require("./products-repository.service");
const product_entity_providers_1 = require("../../core/database/entities/product/product-entity.providers");
const ailment_entity_providers_1 = require("../../core/database/entities/ailments/ailment-entity.providers");
const product_images_entity_providers_1 = require("../../core/database/entities/product-images/product-images-entity.providers");
const database_providers_1 = require("../../core/database/database.providers");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_controller_1.ProductsController],
        providers: [
            products_service_1.ProductsService,
            products_repository_service_1.ProductsRepositoryService,
            ...product_entity_providers_1.productEntityProviders,
            ...product_images_entity_providers_1.productImageEntityProviders,
            ...ailment_entity_providers_1.ailmentEntityProviders,
            ...database_providers_1.databaseProviders,
        ],
        exports: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map