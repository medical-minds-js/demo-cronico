"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionStatusEntityProviders = void 0;
const constants_1 = require("../../../constants");
const subscription_status_entity_1 = require("./subscription-status.entity");
exports.subscriptionStatusEntityProviders = [
    {
        provide: constants_1.SUBSCRIPTION_STATUS_REPOSITORY,
        useValue: subscription_status_entity_1.SubscriptionStatusEntity,
    },
];
//# sourceMappingURL=subscription-status-entity.providers.js.map