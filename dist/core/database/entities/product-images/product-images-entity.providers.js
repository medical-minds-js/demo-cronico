"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImageEntityProviders = void 0;
const constants_1 = require("../../../constants");
const product_images_entity_1 = require("./product-images.entity");
exports.productImageEntityProviders = [
    {
        provide: constants_1.PRODUCT_IMAGES_REPOSITORY,
        useValue: product_images_entity_1.ProductImageEntity,
    },
];
//# sourceMappingURL=product-images-entity.providers.js.map