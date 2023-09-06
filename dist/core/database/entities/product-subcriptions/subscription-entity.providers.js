"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionEntityProviders = void 0;
const constants_1 = require("../../../constants");
const subscription_entity_1 = require("./subscription.entity");
exports.subscriptionEntityProviders = [
    {
        provide: constants_1.SUBSCRIPTION_REPOSITORY,
        useValue: subscription_entity_1.SubscriptionEntity,
    },
];
//# sourceMappingURL=subscription-entity.providers.js.map