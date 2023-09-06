"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionStatusEntityProviders = void 0;
const constants_1 = require("../../../constants");
const subscription_product_status_entity_1 = require("./subscription-product-status.entity");
exports.subscriptionStatusEntityProviders = [
    {
        provide: constants_1.SUBSCRIPTION_PRODUCT_STATUS_REPOSITORY,
        useValue: subscription_product_status_entity_1.SubscriptionProductStatusEntity,
    },
];
//# sourceMappingURL=subscription-product-status-entity.providers.js.map