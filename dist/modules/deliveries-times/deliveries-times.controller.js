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
exports.DeliveriesTimesController = void 0;
const common_1 = require("@nestjs/common");
const deliveries_times_service_1 = require("./deliveries-times.service");
const fail_response_1 = require("../../core/clases/fail.response");
const success_list_response_1 = require("../../core/clases/success-list.response");
const success_response_1 = require("../../core/clases/success.response");
const deliveries_times_entity_1 = require("../../core/database/entities/deliveries-times/deliveries-times.entity");
let DeliveriesTimesController = class DeliveriesTimesController {
    async getCartListByUserId() {
        const data = await this.deliveriesTimesService.getDeliveriesTimesList();
        return new success_list_response_1.SuccessListResponse(data);
    }
    async addShoppingCart(body) {
        const data = await this.deliveriesTimesService.save(body);
        return new success_response_1.SuccessResponse(data);
    }
    async updateDeliveryTime(request) {
        const data = await this.deliveriesTimesService.updateDeliveryTime(request.id, request);
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
        const data = await this.deliveriesTimesService.delete(params.deliveryId);
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
    (0, common_1.Inject)(deliveries_times_service_1.DeliveriesTimesService),
    __metadata("design:type", deliveries_times_service_1.DeliveriesTimesService)
], DeliveriesTimesController.prototype, "deliveriesTimesService", void 0);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveriesTimesController.prototype, "getCartListByUserId", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deliveries_times_entity_1.DeliveryTimeEntity]),
    __metadata("design:returntype", Promise)
], DeliveriesTimesController.prototype, "addShoppingCart", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deliveries_times_entity_1.DeliveryTimeEntity]),
    __metadata("design:returntype", Promise)
], DeliveriesTimesController.prototype, "updateDeliveryTime", null);
__decorate([
    (0, common_1.Delete)('delete:deliveryId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeliveriesTimesController.prototype, "deleteShoppingCart", null);
DeliveriesTimesController = __decorate([
    (0, common_1.Controller)('api/v1/deliveries-times')
], DeliveriesTimesController);
exports.DeliveriesTimesController = DeliveriesTimesController;
//# sourceMappingURL=deliveries-times.controller.js.map