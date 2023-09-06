"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postalCodesEntityProviders = void 0;
const constants_1 = require("../../../constants");
const postal_code_entity_1 = require("./postal-code.entity");
exports.postalCodesEntityProviders = [
    {
        provide: constants_1.POSTAL_CODES_REPOSITORY,
        useValue: postal_code_entity_1.PostalCodeEntity,
    },
];
//# sourceMappingURL=postal-codes-entity.providers.js.map