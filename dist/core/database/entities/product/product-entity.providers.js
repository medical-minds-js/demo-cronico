"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productEntityProviders = void 0;
const constants_1 = require("../../../constants");
const product_entity_1 = require("./product.entity");
exports.productEntityProviders = [
    {
        provide: constants_1.PRODUCT_REPOSITORY,
        useValue: product_entity_1.ProductEntity,
    },
];
//# sourceMappingURL=product-entity.providers.js.map