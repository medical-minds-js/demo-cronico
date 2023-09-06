"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const constants_1 = require("../core/constants");
const user_entity_1 = require("../core/database/entities/user/user.entity");
exports.usersProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.UserEntity,
    },
];
//# sourceMappingURL=user-entity.providers.js.map