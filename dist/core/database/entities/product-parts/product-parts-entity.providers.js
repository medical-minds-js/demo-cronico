"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productPartEntityProviders = void 0;
const constants_1 = require("../../../constants");
const product_parts_entity_1 = require("./product-parts.entity");
exports.productPartEntityProviders = [
    {
        provide: constants_1.PRODUCT_PARTS_REPOSITORY,
        useValue: product_parts_entity_1.ProductPartEntity,
    },
];
//# sourceMappingURL=product-parts-entity.providers.js.map