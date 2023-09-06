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
exports.SubscriptionsRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const product_entity_1 = require("../../core/database/entities/product/product.entity");
const sale_entity_1 = require("../../core/database/entities/sales/sale.entity");
const subscription_status_entity_1 = require("../../core/database/entities/subscription-status/subscription-status.entity");
const user_entity_1 = require("../../core/database/entities/user/user.entity");
let SubscriptionsRepositoryService = class SubscriptionsRepositoryService {
    constructor(subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }
    async findSubscriptionByUserId(userId) {
        return await this.subscriptionRepository.findAll({
            where: { userId: [userId] },
            include: [
                product_entity_1.ProductEntity,
                user_entity_1.UserEntity,
                sale_entity_1.SaleEntity,
                subscription_status_entity_1.SubscriptionStatusEntity,
            ],
        });
    }
};
SubscriptionsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.SUBSCRIPTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SubscriptionsRepositoryService);
exports.SubscriptionsRepositoryService = SubscriptionsRepositoryService;
//# sourceMappingURL=subscriptions-repository.service.js.map