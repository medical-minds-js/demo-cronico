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
exports.ShoppingCartControllerController = void 0;
const common_1 = require("@nestjs/common");
const shopping_cart_service_1 = require("./shopping-cart.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
const shopping_cart_entity_1 = require("../../core/database/entities/shopping-carts/shopping-cart.entity");
const success_response_1 = require("../../core/clases/success.response");
const fail_response_1 = require("../../core/clases/fail.response");
const auth_guard_1 = require("../auth/guard/auth.guard");
let ShoppingCartControllerController = class ShoppingCartControllerController {
    async getCartListByUserId(params) {
        const data = await this.shoppingCartService.findByUserId(params.userId);
        return new success_list_response_1.SuccessListResponse(data);
    }
    async addShoppingCart(body, req) {
        const data = await this.shoppingCartService.save(req.user.sub, body);
        return new success_response_1.SuccessResponse(data);
    }
    async updateShoppingCart(request, req) {
        const data = await this.shoppingCartService.updateCart(req.user.sub, request.id, request);
        if (data[0] > 0) {
            return new success_response_1.SuccessResponse(data);
        }
        else {
            if (data[0] < 0)
                return new fail_response_1.FailResponse('Registro no encontrado');
            if (data[0] == 0)
                return new fail_response_1.FailResponse('Error al actualizar');
        }
    }
    async deleteShoppingCart(params) {
        const data = await this.shoppingCartService.delete(params.shoppingCartId);
        if (data > 0) {
            return new success_response_1.SuccessResponse(data);
        }
        else {
            if (data < 0)
                return new fail_response_1.FailResponse('Registro no encontrado');
            if (data == 0)
                return new fail_response_1.FailResponse('Error al actualizar');
        }
    }
    async confirmOrder(req, confirmOrder) {
        const data = await this.shoppingCartService.confirmOrder(req.user.sub, confirmOrder);
        return new success_response_1.SuccessResponse('Orden confirmada');
    }
};
__decorate([
    (0, common_1.Inject)(shopping_cart_service_1.ShoppingCartService),
    __metadata("design:type", shopping_cart_service_1.ShoppingCartService)
], ShoppingCartControllerController.prototype, "shoppingCartService", void 0);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('list/:userId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartControllerController.prototype, "getCartListByUserId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shopping_cart_entity_1.ShoppingCartEntity, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartControllerController.prototype, "addShoppingCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shopping_cart_entity_1.ShoppingCartEntity, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartControllerController.prototype, "updateShoppingCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('delete/:shoppingCartId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartControllerController.prototype, "deleteShoppingCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('confirm-order'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartControllerController.prototype, "confirmOrder", null);
ShoppingCartControllerController = __decorate([
    (0, common_1.Controller)('api/v1/shopping-cart')
], ShoppingCartControllerController);
exports.ShoppingCartControllerController = ShoppingCartControllerController;
//# sourceMappingURL=shopping-cart.controller.js.map