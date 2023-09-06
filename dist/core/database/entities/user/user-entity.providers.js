"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const user_entity_1 = require("./user.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.UserEntity,
    },
];
//# sourceMappingURL=user-entity.providers.js.map