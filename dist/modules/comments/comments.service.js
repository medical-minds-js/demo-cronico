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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_repository_service_1 = require("./comments-repository.service");
const fail_response_1 = require("../../core/clases/fail.response");
const users_service_1 = require("../users/users.service");
const comment_utils_1 = require("./interfaces/comment.utils");
let CommentsService = class CommentsService {
    async saveCommentService(data) {
        try {
            const comment = await this.commentsRepository.saveComment(data);
            const user = await this.updateUserComments(comment.userId);
            return comment;
        }
        catch (e) {
            throw new fail_response_1.FailResponse(e.error_message);
        }
    }
    async getAllComments() {
        const items = await this.commentsRepository.getAll();
        const allUsers = [];
        items.map((item) => {
            const comment = item.get({ plain: true });
            allUsers.push(comment.userId);
        });
        const usersArr = new Set(allUsers);
        const result = [...usersArr];
        const usersList = await this.usersService.findUsersByIds(result);
        return items.map((item) => {
            const comment = item.get({ plain: true });
            const userFinded = usersList.find((u) => u.id == comment.userId);
            if (!userFinded) {
                throw new common_1.NotFoundException('Registro no encontrado');
            }
            return (0, comment_utils_1.CommentMapper)(item.get({ plain: true }), `${userFinded.name} ${userFinded.surname}`);
        });
    }
    async updateUserComments(userId) {
        const userFinded = await this.usersService.getById(userId);
        if (!userFinded) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        userFinded.haveComment = 1;
        const data = await this.usersService.updateRegister(userFinded);
        if (data[0] === 0) {
            throw new fail_response_1.FailResponse('Error al actualizar');
        }
        return data;
    }
};
__decorate([
    (0, common_1.Inject)(comments_repository_service_1.CommentsRepositoryService),
    __metadata("design:type", comments_repository_service_1.CommentsRepositoryService)
], CommentsService.prototype, "commentsRepository", void 0);
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], CommentsService.prototype, "usersService", void 0);
CommentsService = __decorate([
    (0, common_1.Injectable)()
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map