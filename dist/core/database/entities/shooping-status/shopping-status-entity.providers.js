"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const shopping_status_entity_1 = require("./shopping-status.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.SHOPPING_STATUS_REPOSITORY,
        useValue: shopping_status_entity_1.ShoppingStatusEntity,
    },
];
//# sourceMappingURL=shopping-status-entity.providers.js.map