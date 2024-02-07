"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMembershipsProviders = void 0;
const constants_1 = require("../../../constants");
const order_memberships_entity_1 = require("./order-memberships.entity");
exports.orderMembershipsProviders = [
    {
        provide: constants_1.ORDER_MEMBERSHIPS_REPOSITORY,
        useValue: order_memberships_entity_1.OrderMembershipsEntity,
    },
];
//# sourceMappingURL=order-memberships-entity.providers.js.map