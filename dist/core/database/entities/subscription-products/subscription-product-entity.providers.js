"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionProductEntityProviders = void 0;
const constants_1 = require("../../../constants");
const subscription_product_entity_1 = require("./subscription-product.entity");
exports.subscriptionProductEntityProviders = [
    {
        provide: constants_1.SUBSCRIPTION_PRODUCT_REPOSITORY,
        useValue: subscription_product_entity_1.SubscriptionProductEntity,
    },
];
//# sourceMappingURL=subscription-product-entity.providers.js.map