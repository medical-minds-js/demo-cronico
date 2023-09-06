"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveriesTimesEntityProviders = void 0;
const constants_1 = require("../../../constants");
const deliveries_times_entity_1 = require("./deliveries-times.entity");
exports.deliveriesTimesEntityProviders = [
    {
        provide: constants_1.DELIVERY_TIME_REPOSITORY,
        useValue: deliveries_times_entity_1.DeliveryTimeEntity,
    },
];
//# sourceMappingURL=deliveries-times-entity.providers.js.map