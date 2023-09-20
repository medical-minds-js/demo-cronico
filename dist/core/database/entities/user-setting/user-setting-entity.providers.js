"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettingEntityProviders = void 0;
const constants_1 = require("../../../constants");
const user_setting_entity_1 = require("./user-setting.entity");
exports.userSettingEntityProviders = [
    {
        provide: constants_1.USER_SETTING_REPOSITORY,
        useValue: user_setting_entity_1.UserSettingEntity,
    },
];
//# sourceMappingURL=user-setting-entity.providers.js.map