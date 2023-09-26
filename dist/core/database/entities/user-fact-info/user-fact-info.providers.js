"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactInfoEntityProviders = void 0;
const constants_1 = require("../../../constants");
const user_fact_info_entity_1 = require("./user-fact-info.entity");
exports.UserFactInfoEntityProviders = [
    {
        provide: constants_1.USER_FACT_INFO_REPOSITORY,
        useValue: user_fact_info_entity_1.UserFactInfoEntity,
    },
];
//# sourceMappingURL=user-fact-info.providers.js.map