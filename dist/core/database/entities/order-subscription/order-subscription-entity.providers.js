"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersSubscriptionsProviders = void 0;
const constants_1 = require("../../../constants");
const order_subscription_entity_1 = require("./order-subscription.entity");
exports.ordersSubscriptionsProviders = [
    {
        provide: constants_1.ORDER_SUBSCRIPTION_REPOSITORY,
        useValue: order_subscription_entity_1.OrderSubscriptionEntity,
    },
];
//# sourceMappingURL=order-subscription-entity.providers.js.map