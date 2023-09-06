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
exports.SubsciptionController = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const auth_guard_1 = require("../auth/guard/auth.guard");
const subscription_entity_1 = require("../../core/database/entities/subscription/subscription.entity");
const success_response_1 = require("../../core/clases/success.response");
const fail_response_1 = require("../../core/clases/fail.response");
let SubsciptionController = class SubsciptionController {
    async updateQuantities(request) {
        const data = await this.subscriptionService.updateQuantities(request);
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
    async updateNextDelivery(request) {
        const data = await this.subscriptionService.updateNextDelivery(request);
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
    async updateStatus(request) {
        const data = await this.subscriptionService.updateNextDelivery(request);
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
};
__decorate([
    (0, common_1.Inject)(subscription_service_1.SubscriptionService),
    __metadata("design:type", subscription_service_1.SubscriptionService)
], SubsciptionController.prototype, "subscriptionService", void 0);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('update/quantity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_entity_1.SubscriptionEntity]),
    __metadata("design:returntype", Promise)
], SubsciptionController.prototype, "updateQuantities", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('update/delivery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_entity_1.SubscriptionEntity]),
    __metadata("design:returntype", Promise)
], SubsciptionController.prototype, "updateNextDelivery", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('update/status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_entity_1.SubscriptionEntity]),
    __metadata("design:returntype", Promise)
], SubsciptionController.prototype, "updateStatus", null);
SubsciptionController = __decorate([
    (0, common_1.Controller)('api/v1/subscription')
], SubsciptionController);
exports.SubsciptionController = SubsciptionController;
//# sourceMappingURL=subsciption.controller.js.map