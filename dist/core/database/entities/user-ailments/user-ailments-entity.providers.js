"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAilmentsEntityProviders = void 0;
const constants_1 = require("../../../constants");
const user_ailments_entity_1 = require("./user-ailments.entity");
exports.userAilmentsEntityProviders = [
    {
        provide: constants_1.USER_AILMENTS_REPOSITORY,
        useValue: user_ailments_entity_1.UserAilmentsEntity,
    },
];
//# sourceMappingURL=user-ailments-entity.providers.js.map