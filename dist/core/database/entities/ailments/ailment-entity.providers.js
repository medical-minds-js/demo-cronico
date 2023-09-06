"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ailmentEntityProviders = void 0;
const constants_1 = require("../../../constants");
const ailment_entity_1 = require("./ailment.entity");
exports.ailmentEntityProviders = [
    {
        provide: constants_1.AILMENT_REPOSITORY,
        useValue: ailment_entity_1.AilmentEntity,
    },
];
//# sourceMappingURL=ailment-entity.providers.js.map