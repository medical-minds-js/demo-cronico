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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const subscription_repository_service_1 = require("./subscription-repository.service");
let SubscriptionService = class SubscriptionService {
    async updateQuantities(sub) {
        const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
        if (cartFinded == null) {
            return [-1];
        }
        const data = await this.subscriptionRepository.updateQuantities(sub);
        return data;
    }
    async updateNextDelivery(sub) {
        const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
        if (cartFinded == null) {
            return [-1];
        }
        const data = await this.subscriptionRepository.updateNextDelivery(sub);
        return data;
    }
    async updateStatus(sub) {
        const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
        if (cartFinded == null) {
            return [-1];
        }
        const data = await this.subscriptionRepository.updateStatus(sub);
        return data;
    }
};
__decorate([
    (0, common_1.Inject)(subscription_repository_service_1.SubscriptionRepositoryService),
    __metadata("design:type", subscription_repository_service_1.SubscriptionRepositoryService)
], SubscriptionService.prototype, "subscriptionRepository", void 0);
SubscriptionService = __decorate([
    (0, common_1.Injectable)()
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map