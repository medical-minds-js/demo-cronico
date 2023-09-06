"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsEntityProviders = void 0;
const constants_1 = require("../../../constants");
const cards_entity_1 = require("./cards.entity");
exports.cardsEntityProviders = [
    {
        provide: constants_1.CARD_REPOSITORY,
        useValue: cards_entity_1.CardEntity,
    },
];
//# sourceMappingURL=cards-entity.providers.js.map