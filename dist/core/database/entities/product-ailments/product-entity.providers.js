"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productAilmentsEntityProviders = void 0;
const constants_1 = require("../../../constants");
exports.productAilmentsEntityProviders = [
    {
        provide: constants_1.PRODUCT_REPOSITORY,
        useValue: ProductAilmentsEntity,
    },
];
//# sourceMappingURL=product-entity.providers.js.map