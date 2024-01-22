"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membershipsEntityProviders = void 0;
const constants_1 = require("../../../constants");
const memberships_entity_1 = require("./memberships-entity");
exports.membershipsEntityProviders = [
    {
        provide: constants_1.MEMBERSHIPS_REPOSITORY,
        useValue: memberships_entity_1.MembershipsEntity,
    },
];
//# sourceMappingURL=memberships-entity.providers.js.map