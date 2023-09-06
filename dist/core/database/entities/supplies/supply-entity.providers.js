"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplyEntityProviders = void 0;
const constants_1 = require("../../../constants");
const supply_entity_1 = require("./supply.entity");
exports.supplyEntityProviders = [
    {
        provide: constants_1.SUPPLY_REPOSITORY,
        useValue: supply_entity_1.SupplyEntity,
    },
];
//# sourceMappingURL=supply-entity.providers.js.map