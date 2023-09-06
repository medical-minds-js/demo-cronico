"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const order_status_entity_1 = require("./order-status.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.ORDER_STATUS_REPOSITORY,
        useValue: order_status_entity_1.OrderStatusEntity,
    },
];
//# sourceMappingURL=order-status-entity.providers.js.map