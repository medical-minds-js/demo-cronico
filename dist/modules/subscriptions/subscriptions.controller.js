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
exports.SubscriptionsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const subscriptions_service_1 = require("./subscriptions.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
let SubscriptionsController = class SubscriptionsController {
    async getCartListByUserId(req) {
        const data = await this.subscriptionsService.findByUserId(req.user.sub);
        return new success_list_response_1.SuccessListResponse(data);
    }
};
__decorate([
    (0, common_1.Inject)(subscriptions_service_1.SubscriptionsService),
    __metadata("design:type", subscriptions_service_1.SubscriptionsService)
], SubscriptionsController.prototype, "subscriptionsService", void 0);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "getCartListByUserId", null);
SubscriptionsController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/subscriptions')
], SubscriptionsController);
exports.SubscriptionsController = SubscriptionsController;
//# sourceMappingURL=subscriptions.controller.js.map