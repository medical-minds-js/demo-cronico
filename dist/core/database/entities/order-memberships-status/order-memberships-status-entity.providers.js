"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMembershipsStatusEntityProviders = void 0;
const constants_1 = require("../../../constants");
const order_memberships_status_entity_1 = require("./order-memberships-status.entity");
exports.orderMembershipsStatusEntityProviders = [
    {
        provide: constants_1.ORDER_MEMBERSHIPS_STATUS_REPOSITORY,
        useValue: order_memberships_status_entity_1.OrderMembershipsStatusEntity,
    },
];
//# sourceMappingURL=order-memberships-status-entity.providers.js.map