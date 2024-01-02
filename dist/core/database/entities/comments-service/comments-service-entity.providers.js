"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsServiceEntityProviders = void 0;
const constants_1 = require("../../../constants");
const comments_service_entity_1 = require("./comments-service.entity");
exports.commentsServiceEntityProviders = [
    {
        provide: constants_1.COMMENTS_SERVICE_REPOSITORY,
        useValue: comments_service_entity_1.CommentsServiceEntity,
    },
];
//# sourceMappingURL=comments-service-entity.providers.js.map