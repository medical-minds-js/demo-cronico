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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const address_entity_1 = require("../../core/database/entities/address/address.entity");
const success_list_response_1 = require("../../core/clases/success-list.response");
const success_response_1 = require("../../core/clases/success.response");
const fail_response_1 = require("../../core/clases/fail.response");
const auth_guard_1 = require("../auth/guard/auth.guard");
let AddressController = class AddressController {
    async getCartListByUserId(req) {
        const data = await this.addressService.findByUserId(req.user.sub);
        return new success_list_response_1.SuccessListResponse(data);
    }
    async addShoppingCart(body) {
        const data = await this.addressService.save(body);
        return new success_response_1.SuccessResponse(data);
    }
    async setDefaultCardByUser(req, params) {
        await this.addressService.setDefaultByUser(req.user.sub, params.addressId);
        return new success_response_1.SuccessResponse('Dirección actualizada');
    }
    async updateShoppingCart(request) {
        const data = await this.addressService.updateAddress(request.id, request);
        if (data[0] > 0) {
            return new success_response_1.SuccessResponse('Dirección Actualizada');
        }
        else {
            if (data[0] < 0)
                return new fail_response_1.FailResponse('Registro no encontrado');
            if (data[0] == 0)
                return new fail_response_1.FailResponse('Error al actualizar');
        }
    }
    async deleteShoppingCart(params) {
        const data = await this.addressService.delete(params.addressId);
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
};
__decorate([
    (0, common_1.Inject)(address_service_1.AddressService),
    __metadata("design:type", address_service_1.AddressService)
], AddressController.prototype, "addressService", void 0);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getCartListByUserId", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_entity_1.AddressEntity]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "addShoppingCart", null);
__decorate([
    (0, common_1.Post)('user/active/:addressId'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "setDefaultCardByUser", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_entity_1.AddressEntity]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "updateShoppingCart", null);
__decorate([
    (0, common_1.Delete)('delete/:addressId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "deleteShoppingCart", null);
AddressController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/address')
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map