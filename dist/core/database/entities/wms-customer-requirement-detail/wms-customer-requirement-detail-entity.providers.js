"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wmsCustomerRequirementDetailEntityProviders = void 0;
const constants_1 = require("../../../constants");
const wms_customer_requirement_detail_entity_1 = require("./wms-customer-requirement-detail.entity");
exports.wmsCustomerRequirementDetailEntityProviders = [
    {
        provide: constants_1.WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS,
        useValue: wms_customer_requirement_detail_entity_1.WmsCustomerRequirementDetailEntity,
    },
];
//# sourceMappingURL=wms-customer-requirement-detail-entity.providers.js.map