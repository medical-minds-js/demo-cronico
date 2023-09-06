"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const news_media_entity_1 = require("./news-media.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.NEWS_MEDIA_REPOSITORY,
        useValue: news_media_entity_1.NewsMediaEntity,
    },
];
//# sourceMappingURL=news-media-entity.providers.js.map