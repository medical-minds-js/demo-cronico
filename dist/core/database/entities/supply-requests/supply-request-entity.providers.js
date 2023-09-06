"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplyRequestEntityProviders = void 0;
const constants_1 = require("../../../constants");
const supply_request_entity_1 = require("./supply-request.entity");
exports.supplyRequestEntityProviders = [
    {
        provide: constants_1.SUPPLY_REQUEST_REPOSITORY,
        useValue: supply_request_entity_1.SupplyRequestEntity,
    },
];
//# sourceMappingURL=supply-request-entity.providers.js.map