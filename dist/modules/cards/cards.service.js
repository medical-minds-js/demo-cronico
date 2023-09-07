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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const cards_repository_service_1 = require("./cards-repository.service");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const users_service_1 = require("../users/users.service");
const open_pay_utils_1 = require("../../core/services/open-pay/open-pay.utils");
const fail_response_1 = require("../../core/clases/fail.response");
let CardsService = class CardsService {
    async getCardsByUser(userId) {
        const user = await this.usersService.getById(userId);
        if (!user.openPayId) {
            return [];
        }
        const items = await this.cardsRepositoryService.findCardsByUser(userId);
        const cards = await this.openPayService.getCardsByUser(user.openPayId);
        return items
            .map((item) => {
            const card = cards.find((card) => card.id === item.cardOpenPayId);
            if (!card)
                return;
            return Object.assign(Object.assign({}, (0, open_pay_utils_1.CardMapper)(card)), { active: item.active, id: item.id });
        })
            .filter((i) => i);
    }
    async getActiveByUser(userId) {
        return this.cardsRepositoryService.findActiveCardsByUser(userId);
    }
    async saveCardByUser(userId, card) {
        await this.cardsRepositoryService.disableAllCardsByUser(userId);
        await this.cardsRepositoryService.saveCardByUser(Object.assign(Object.assign({}, card), { userId }));
        const user = await this.usersService.getById(userId);
        try {
            await this.openPayService.addCardToCustomer(user.openPayId, {
                token_id: card.cardOpenPayId,
                device_session_id: card.deviceSession,
            });
        }
        catch (e) {
            if (e.error_code === 3001) {
                throw new fail_response_1.FailResponse('La tarjeta fue declinada por el banco');
            }
            throw new fail_response_1.FailResponse(e.error_message);
        }
        return 'Tarjeta guardada';
    }
    async setDefaultCardByUser(userId, cardId) {
        await this.cardsRepositoryService.disableAllCardsByUser(userId);
        await this.cardsRepositoryService.setDefaultCardByUser(cardId);
        return 'Tarjeta guardada';
    }
};
__decorate([
    (0, common_1.Inject)(cards_repository_service_1.CardsRepositoryService),
    __metadata("design:type", cards_repository_service_1.CardsRepositoryService)
], CardsService.prototype, "cardsRepositoryService", void 0);
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], CardsService.prototype, "usersService", void 0);
__decorate([
    (0, common_1.Inject)(open_pay_service_1.OpenPayService),
    __metadata("design:type", open_pay_service_1.OpenPayService)
], CardsService.prototype, "openPayService", void 0);
CardsService = __decorate([
    (0, common_1.Injectable)()
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map