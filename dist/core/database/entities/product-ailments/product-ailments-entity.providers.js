"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productAilmentsEntityProviders = void 0;
const constants_1 = require("../../../constants");
const product_ailments_entity_1 = require("./product-ailments.entity");
exports.productAilmentsEntityProviders = [
    {
        provide: constants_1.PRODUCT_AILMENTS_REPOSITORY,
        useValue: product_ailments_entity_1.ProductAilmentsEntity,
    },
];
//# sourceMappingURL=product-ailments-entity.providers.js.map