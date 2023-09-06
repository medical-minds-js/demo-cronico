"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wmsCustomerRequirementEntityProviders = void 0;
const constants_1 = require("../../../constants");
const wms_customer_requirement_entity_1 = require("./wms-customer-requirement.entity");
exports.wmsCustomerRequirementEntityProviders = [
    {
        provide: constants_1.WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS,
        useValue: wms_customer_requirement_entity_1.WmsCustomerRequirementEntity,
    },
];
//# sourceMappingURL=wms-customer-requirement-entity.providers.js.map