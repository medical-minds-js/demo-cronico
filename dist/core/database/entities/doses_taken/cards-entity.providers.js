"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doseTakenEntityEntityProviders = void 0;
const constants_1 = require("../../../constants");
const cards_entity_1 = require("./cards.entity");
exports.doseTakenEntityEntityProviders = [
    {
        provide: constants_1.DOSES_TAKEN_REPOSITORY,
        useValue: cards_entity_1.DoseTakenEntity,
    },
];
//# sourceMappingURL=cards-entity.providers.js.map