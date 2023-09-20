"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingEntityProviders = void 0;
const constants_1 = require("../../../constants");
const setting_entity_1 = require("./setting.entity");
exports.settingEntityProviders = [
    {
        provide: constants_1.SETTING_REPOSITORY,
        useValue: setting_entity_1.SettingEntity,
    },
];
//# sourceMappingURL=setting-entity.providers.js.map