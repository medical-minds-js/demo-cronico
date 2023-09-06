"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsEntityProviders = void 0;
const constants_1 = require("../../../constants");
const supply_request_entity_1 = require("./supply-request.entity");
exports.cardsEntityProviders = [
    {
        provide: constants_1.CARD_REPOSITORY,
        useValue: supply_request_entity_1.CardEntity,
    },
];
//# sourceMappingURL=cards-entity.providers.js.map