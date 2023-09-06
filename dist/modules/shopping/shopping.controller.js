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
exports.ShoppingController = void 0;
const common_1 = require("@nestjs/common");
const success_list_response_1 = require("../../core/clases/success-list.response");
const shopping_service_1 = require("./shopping.service");
const auth_guard_1 = require("../auth/guard/auth.guard");
const success_response_1 = require("../../core/clases/success.response");
let ShoppingController = class ShoppingController {
    async getListShoppping(req, options) {
        const data = await this.shoppingService.getListShoppping(req.user.sub, options);
        return new success_list_response_1.SuccessListResponse(data);
    }
    async getShoppping(req, params) {
        const data = await this.shoppingService.getShopingById(params.id);
        return new success_response_1.SuccessResponse(data);
    }
    async getInfoShoppping(req, params) {
        const data = await this.shoppingService.getOrderCard(req.user.sub, params.id);
        return new success_response_1.SuccessResponse(data);
    }
    async getSubscriptionsByUserId(req) {
        const data = await this.shoppingService.findSuscriptionsByUserId(req.user.sub);
        return new success_list_response_1.SuccessListResponse(data);
    }
    async getOrdersByUserId(req) {
        const data = await this.shoppingService.findOrdersByUserId(req.user.sub);
        return new success_list_response_1.SuccessListResponse(data);
    }
};
__decorate([
    (0, common_1.Inject)(shopping_service_1.ShoppingService),
    __metadata("design:type", shopping_service_1.ShoppingService)
], ShoppingController.prototype, "shoppingService", void 0);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "getListShoppping", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "getShoppping", null);
__decorate([
    (0, common_1.Get)('order/:id/card'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "getInfoShoppping", null);
__decorate([
    (0, common_1.Get)('subscriptions/list'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "getSubscriptionsByUserId", null);
__decorate([
    (0, common_1.Get)('orders/list'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "getOrdersByUserId", null);
ShoppingController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/shopping')
], ShoppingController);
exports.ShoppingController = ShoppingController;
//# sourceMappingURL=shopping.controller.js.map