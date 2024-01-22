"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membershipsUsersEntityProviders = void 0;
const constants_1 = require("../../../constants");
const memberships_users_entity_1 = require("./memberships-users-entity");
exports.membershipsUsersEntityProviders = [
    {
        provide: constants_1.MEMBERSHIPS_USERS_REPOSITORY,
        useValue: memberships_users_entity_1.MembershipsUsersEntity,
    },
];
//# sourceMappingURL=memberships-users-entity.provider.js.map