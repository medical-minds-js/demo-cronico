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
const sequelize_1 = require("sequelize");
const constants_1 = require("../../core/constants");
const product_entity_1 = require("../../core/database/entities/product/product.entity");
const subscription_product_status_entity_1 = require("../../core/database/entities/subscription-product-status/subscription-product-status.entity");
const subscription_status_entity_1 = require("../../core/database/entities/subscription-status/subscription-status.entity");
let SubscriptionsRepositoryService = class SubscriptionsRepositoryService {
    constructor(subscriptionRepository, subscriptionProductRepository, orderSubscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.subscriptionProductRepository = subscriptionProductRepository;
        this.orderSubscriptionRepository = orderSubscriptionRepository;
    }
    async saveSubscription(data, subcriptionProducts) {
        const subscription = await this.subscriptionRepository.create(Object.assign(Object.assign({}, data), { visits: 0, createdAt: new Date() }));
        const products = subcriptionProducts.map((item) => (Object.assign(Object.assign({}, item), { subscriptionId: subscription.id, createdAt: new Date() })));
        await this.subscriptionProductRepository.bulkCreate(products);
        return subscription;
    }
    async getSubscriptionById(id) {
        return this.subscriptionRepository.findOne({ where: { id } });
    }
    async findFullSubscriptionById(id) {
        const data = await this.subscriptionRepository.findOne({ where: { id } });
        const products = await this.subscriptionProductRepository.findAll({
            where: { subscriptionId: id },
        });
        return Object.assign(Object.assign({}, data.get({ plain: true })), { products: products.map((item) => item.get({ plain: true })) });
    }
    async updateOrderId(orderId, ids) {
        const data = ids.map((subscriptionId) => ({ orderId, subscriptionId }));
        await this.orderSubscriptionRepository.bulkCreate(data);
    }
    async changeNoPaymentStatus(ids) {
        return this.subscriptionRepository.update({ subscriptionStatusId: 2 }, {
            where: { id: { [sequelize_1.Op.in]: ids } },
        });
    }
    async changePaidStatus(subscriptions) {
        return Promise.all(subscriptions.map((item) => {
            const nextDelivery = new Date();
            nextDelivery.setDate(nextDelivery.getDate() + item.period);
            return this.subscriptionRepository.update({
                subscriptionStatusId: 3,
                nextDelivery: nextDelivery.toISOString().substring(0, 10),
            }, {
                where: { id: item.id },
            });
        }));
    }
    async findSubscriptionByUserId(id, userId, pagination) {
        const wheres = {};
        if (id) {
            wheres.id = id;
        }
        if (userId) {
            wheres.userId = userId;
        }
        const page = pagination.page ? Number(pagination.page) : 1;
        const itemsPerPage = pagination.itemsPerPage
            ? Number(pagination.itemsPerPage)
            : 100000;
        return this.subscriptionRepository.findAll({
            where: wheres,
            include: [subscription_status_entity_1.SubscriptionStatusEntity],
            order: [['id', 'DESC']],
            limit: itemsPerPage,
            offset: (page - 1) * itemsPerPage,
        });
    }
    async findSubscriptionProductByIds(ids) {
        return this.subscriptionProductRepository.findAll({
            where: { subscriptionId: [ids] },
            include: [subscription_product_status_entity_1.SubscriptionProductStatusEntity, product_entity_1.ProductEntity],
        });
    }
    async countSubscriptionByUserId(id, userId) {
        const wheres = {};
        if (id) {
            wheres.id = id;
        }
        if (userId) {
            wheres.userId = userId;
        }
        return this.subscriptionRepository.count({
            where: wheres,
        });
    }
};
SubscriptionsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.SUBSCRIPTION_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.SUBSCRIPTION_PRODUCT_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.ORDER_SUBSCRIPTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], SubscriptionsRepositoryService);
exports.SubscriptionsRepositoryService = SubscriptionsRepositoryService;
//# sourceMappingURL=subscriptions-repository.service.js.map