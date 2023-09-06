"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const order_product_status_entity_1 = require("./order-product-status.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.ORDER_PRODUCT_STATUS_REPOSITORY,
        useValue: order_product_status_entity_1.OrderProductStatusEntity,
    },
];
//# sourceMappingURL=order-product-status-entity.providers.js.map