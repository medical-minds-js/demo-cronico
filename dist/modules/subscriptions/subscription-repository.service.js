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
exports.SubscriptionRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let SubscriptionRepositoryService = class SubscriptionRepositoryService {
    constructor(subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }
    async findOneById(id) {
        return this.subscriptionRepository.findAll({
            where: { id: id },
        });
    }
    async updateQuantities(sub) {
        return this.subscriptionRepository.update({
            period: sub.period,
            subtotal: sub.subtotal,
            discount: sub.discount,
            total: sub.total,
        }, {
            where: { id: sub.id },
        });
    }
    async updateNextDelivery(sub) {
        return this.subscriptionRepository.update({
            nextDelivery: sub.nextDelivery,
        }, {
            where: { id: sub.id },
        });
    }
    async updateStatus(sub) {
        return this.subscriptionRepository.update({
            subscriptionStatusId: sub.subscriptionStatusId,
        }, {
            where: { id: sub.id },
        });
    }
};
SubscriptionRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.SUBSCRIPTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SubscriptionRepositoryService);
exports.SubscriptionRepositoryService = SubscriptionRepositoryService;
//# sourceMappingURL=subscription-repository.service.js.map