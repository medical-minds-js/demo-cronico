"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingProviders = void 0;
const constants_1 = require("../../../constants");
const shopping_entity_1 = require("./shopping.entity");
exports.shoppingProviders = [
    {
        provide: constants_1.SHOPPING_REPOSITORY,
        useValue: shopping_entity_1.ShoppingEntity,
    },
];
//# sourceMappingURL=shopping-entity.providers.js.map