"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dosingSetupEntityProviders = void 0;
const constants_1 = require("../../../constants");
const dosing_setup_entity_1 = require("./dosing-setup.entity");
exports.dosingSetupEntityProviders = [
    {
        provide: constants_1.DOSING_SETUP_REPOSITORY,
        useValue: dosing_setup_entity_1.DosingSetupEntity,
    },
];
//# sourceMappingURL=dosing-setup-entity.providers.js.map