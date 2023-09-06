"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleEntityProviders = void 0;
const constants_1 = require("../../../constants");
const sale_entity_1 = require("./sale.entity");
exports.saleEntityProviders = [
    {
        provide: constants_1.SALE_REPOSITORY,
        useValue: sale_entity_1.SaleEntity,
    },
];
//# sourceMappingURL=sale-entity.providers.js.map