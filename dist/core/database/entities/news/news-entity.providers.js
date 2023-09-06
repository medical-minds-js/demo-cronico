"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const news_entity_1 = require("./news.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.NEWS_REPOSITORY,
        useValue: news_entity_1.NewsEntity,
    },
];
//# sourceMappingURL=news-entity.providers.js.map