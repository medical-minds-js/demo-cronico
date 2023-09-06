"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityProviders = void 0;
const constants_1 = require("../../../constants");
const type_media_entity_1 = require("./type-media.entity");
exports.userEntityProviders = [
    {
        provide: constants_1.TYPE_MEDIA_REPOSITORY,
        useValue: type_media_entity_1.TypeMediaEntity,
    },
];
//# sourceMappingURL=type-media-entity.providers.js.map