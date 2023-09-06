"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressDeliveriesTimesEntityProviders = void 0;
const constants_1 = require("../../../constants");
const address_deliveries_times_entity_1 = require("./address-deliveries-times.entity");
exports.addressDeliveriesTimesEntityProviders = [
    {
        provide: constants_1.ADDRESS_DELIVERIES_TIME_REPOSITORY,
        useValue: address_deliveries_times_entity_1.AddressDeliveryTimeEntity,
    },
];
//# sourceMappingURL=address-deliveries-times-entity.providers.js.map