"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_repository_service_1 = require("./comments-repository.service");
const comments_service_entity_providers_1 = require("../../core/database/entities/comments-service/comments-service-entity.providers");
const comments_controller_1 = require("./comments.controller");
const shared_module_1 = require("../../shared/shared/shared.module");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const users_module_1 = require("../users/users.module");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            comments_service_1.CommentsService,
            comments_repository_service_1.CommentsRepositoryService,
            ...comments_service_entity_providers_1.commentsServiceEntityProviders,
        ],
        controllers: [comments_controller_1.CommentsController],
        imports: [shared_module_1.SharedModule, jwt_1.JwtModule.register(constansts_1.jwtOptions), users_module_1.UsersModule],
        exports: [comments_service_1.CommentsService],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map