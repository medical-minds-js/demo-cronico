"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doseTakenEntityProviders = void 0;
const constants_1 = require("../../../constants");
const dose_taken_entity_1 = require("./dose-taken.entity");
exports.doseTakenEntityProviders = [
    {
        provide: constants_1.DOSES_TAKEN_REPOSITORY,
        useValue: dose_taken_entity_1.DoseTakenEntity,
    },
];
//# sourceMappingURL=dose-taken-entity.providers.js.map