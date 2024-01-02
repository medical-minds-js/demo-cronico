"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_service_entity_1 = require("../../core/database/entities/comments-service/comments-service.entity");
const success_response_1 = require("../../core/clases/success.response");
let CommentsController = class CommentsController {
    async createComment(comment) {
        const data = await this.commentsService.saveCommentService(comment);
        return new success_response_1.SuccessResponse(data);
    }
};
__decorate([
    (0, common_1.Inject)(comments_service_1.CommentsService),
    __metadata("design:type", comments_service_1.CommentsService)
], CommentsController.prototype, "commentsService", void 0);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_service_entity_1.CommentsServiceEntity]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('api/v1/comments')
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map