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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const cards_service_1 = require("./cards.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
const success_response_1 = require("../../core/clases/success.response");
let CardsController = class CardsController {
    async cardsByUser(req) {
        const data = await this.cardsService.getCardsByUser(req.user.sub);
        return new success_list_response_1.SuccessListResponse(data);
    }
    async createCard(req, card) {
        const data = await this.cardsService.saveCardByUser(req.user.sub, card);
        return new success_response_1.SuccessResponse(data);
    }
    async setDefaultCardByUser(req, params) {
        const data = await this.cardsService.setDefaultCardByUser(req.user.sub, params.id);
        return new success_response_1.SuccessResponse(data);
    }
};
__decorate([
    (0, common_1.Inject)(cards_service_1.CardsService),
    __metadata("design:type", cards_service_1.CardsService)
], CardsController.prototype, "cardsService", void 0);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "cardsByUser", null);
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "createCard", null);
__decorate([
    (0, common_1.Post)('user/active/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "setDefaultCardByUser", null);
CardsController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/cards')
], CardsController);
exports.CardsController = CardsController;
//# sourceMappingURL=cards.controller.js.map