"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductProviders = void 0;
const constants_1 = require("../../../constants");
const order_product_entity_1 = require("./order-product.entity");
exports.orderProductProviders = [
    {
        provide: constants_1.ORDER_PRODUCT_REPOSITORY,
        useValue: order_product_entity_1.OrderProductEntity,
    },
];
//# sourceMappingURL=order-product-entity.providers.js.map