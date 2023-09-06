"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersProviders = void 0;
const constants_1 = require("../../../constants");
const order_entity_1 = require("./order.entity");
exports.ordersProviders = [
    {
        provide: constants_1.ORDER_REPOSITORY,
        useValue: order_entity_1.OrderEntity,
    },
];
//# sourceMappingURL=order-entity.providers.js.map