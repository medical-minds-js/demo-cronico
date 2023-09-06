"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressEntityProviders = void 0;
const constants_1 = require("../../../constants");
const address_entity_1 = require("./address.entity");
exports.addressEntityProviders = [
    {
        provide: constants_1.ADDRESS_REPOSITORY,
        useValue: address_entity_1.AddressEntity,
    },
];
//# sourceMappingURL=address-entity.providers.js.map