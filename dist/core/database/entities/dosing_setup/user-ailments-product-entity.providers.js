"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dosingSetupEntityProviders = void 0;
const constants_1 = require("../../../constants");
const user_ailments_product_entity_1 = require("../user-ailments-product/user-ailments-product.entity");
exports.dosingSetupEntityProviders = [
    {
        provide: constants_1.USER_AILMENTS_PRODUCT_REPOSITORY,
        useValue: user_ailments_product_entity_1.UserAilmentsProductEntity,
    },
];
//# sourceMappingURL=user-ailments-product-entity.providers.js.map