"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ailmentsImageEntityProviders = void 0;
const constants_1 = require("../../../constants");
const ailment_images_entity_1 = require("./ailment-images.entity");
exports.ailmentsImageEntityProviders = [
    {
        provide: constants_1.AILMENTS_IMAGES_REPOSITORY,
        useValue: ailment_images_entity_1.AilmentsImageEntity,
    },
];
//# sourceMappingURL=ailment-images-entity.providers.js.map