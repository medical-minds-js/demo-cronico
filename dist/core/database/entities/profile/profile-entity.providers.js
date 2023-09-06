"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const profile_entity_1 = require("./profile.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.PROFILE_REPOSITORY,
        useValue: profile_entity_1.ProfileEntity,
    },
];
//# sourceMappingURL=profile-entity.providers.js.map