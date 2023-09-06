"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingCartEntityProviders = void 0;
const constants_1 = require("../../../constants");
const shopping_cart_entity_1 = require("./shopping-cart.entity");
exports.shoppingCartEntityProviders = [
    {
        provide: constants_1.SHOPPING_CART_REPOSITORY,
        useValue: shopping_cart_entity_1.ShoppingCartEntity,
    },
];
//# sourceMappingURL=shopping-cart-entity.providers.js.map