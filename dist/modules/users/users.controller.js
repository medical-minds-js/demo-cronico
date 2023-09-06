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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
const success_response_1 = require("../../core/clases/success.response");
const auth_guard_1 = require("../auth/guard/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const ailment_entity_1 = require("../../core/database/entities/ailments/ailment.entity");
const ailments_service_1 = require("../ailments/ailments.service");
const user_ailments_product_entity_1 = require("../../core/database/entities/user-ailments-product/user-ailments-product.entity");
let UsersController = class UsersController {
    async getUser(req) {
        const data = await this.usersService.findOneById(req.user.sub);
        return new success_response_1.SuccessResponse(data);
    }
    async updateUser(req) {
        await this.usersService.updateRegister(req);
        return new success_response_1.SuccessResponse('Registro actualizado');
    }
    async addUserImage(req, file) {
        return file;
    }
    async activePayment(req) {
        const data = await this.usersService.activePayment(req.user.sub);
        return new success_response_1.SuccessResponse(data);
    }
    async getPaymentId(req) {
        const data = await this.usersService.getPaymentId(req.user.sub);
        return new success_response_1.SuccessResponse(data);
    }
    async getAilments(req, filters) {
        const list = await this.usersService.getUserAilments(req.user.sub, filters);
        return new success_list_response_1.SuccessListResponse(list);
    }
    async addAilments(req, ailments) {
        const data = await this.usersService.addAilments(req.user.sub, ailments);
        return new success_response_1.SuccessResponse(data);
    }
    async getDoseByAilments(req, params) {
        const data = await this.usersService.getFullUserAilments(params.id);
        return new success_response_1.SuccessResponse(data);
    }
    async configUserAilmentsProduct(params, data) {
        const result = await this.usersService.configUserAilmentsProduct(params.id, data);
        return new success_response_1.SuccessResponse('Actualizado');
    }
    async createDoseByAilments(req, data) {
        const result = await this.usersService.createDoseTaken(data);
        return new success_response_1.SuccessResponse(result);
    }
};
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], UsersController.prototype, "usersService", void 0);
__decorate([
    (0, common_1.Inject)(ailments_service_1.AilmentsService),
    __metadata("design:type", ailments_service_1.AilmentsService)
], UsersController.prototype, "ailmentsService", void 0);
__decorate([
    (0, common_1.Get)('/data'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/data/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('/images/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/images',
        }),
    })),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUserImage", null);
__decorate([
    (0, common_1.Post)('/account/active-payment'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "activePayment", null);
__decorate([
    (0, common_1.Post)('/account/payment-id'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPaymentId", null);
__decorate([
    (0, common_1.Get)('/ailments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAilments", null);
__decorate([
    (0, common_1.Post)('/ailments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ailment_entity_1.AilmentEntity]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addAilments", null);
__decorate([
    (0, common_1.Get)('/ailments/:id/show'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDoseByAilments", null);
__decorate([
    (0, common_1.Post)('/ailments/:id/config-take'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_ailments_product_entity_1.UserAilmentsProductEntity]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "configUserAilmentsProduct", null);
__decorate([
    (0, common_1.Post)('/ailments/:id/dose'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_ailments_product_entity_1.UserAilmentsProductEntity]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createDoseByAilments", null);
UsersController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/user')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map