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
exports.OrdersRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const constants_1 = require("../../core/constants");
const cards_entity_1 = require("../../core/database/entities/cards/cards.entity");
const order_product_status_entity_1 = require("../../core/database/entities/order-product-status/order-product-status.entity");
const order_product_entity_1 = require("../../core/database/entities/order-products/order-product.entity");
const order_status_entity_1 = require("../../core/database/entities/order-status/order-status.entity");
const subscription_entity_1 = require("../../core/database/entities/subscription/subscription.entity");
let OrdersRepositoryService = class OrdersRepositoryService {
    constructor(orderRepository, orderProductsRepository, orderSubscriptionsRepository) {
        this.orderRepository = orderRepository;
        this.orderProductsRepository = orderProductsRepository;
        this.orderSubscriptionsRepository = orderSubscriptionsRepository;
    }
    async saveFullOrder(order) {
        const data = await this.orderRepository.create(Object.assign({}, order));
        await this.saveOrderProducts(data.id, order.orderProducts);
        return data;
    }
    async findOrdersByUserId(userId) {
        return await this.orderRepository.findAll({
            where: { userId: [userId] },
            include: [order_product_entity_1.OrderProductEntity],
        });
    }
    async changeNoPaymentStatus(id) {
        return this.orderRepository.update({ subscriptionStatusId: 2 }, {
            where: { id },
        });
    }
    async changePaidStatus(id, paymentId) {
        return this.orderRepository.update({ subscriptionStatusId: 3, paymentId }, {
            where: { id },
        });
    }
    async getOrderBySubscriptionIds(subscriptionIds) {
        const data = await this.orderSubscriptionsRepository.findAll({
            where: { subscriptionId: subscriptionIds },
        });
        const ids = data
            .map((item) => item.orderId)
            .filter((value, index, arr) => arr.indexOf(value) === index);
        return this.orderRepository.findAll({
            where: { id: { [sequelize_1.Op.in]: ids } },
            include: [order_status_entity_1.OrderStatusEntity, subscription_entity_1.SubscriptionEntity],
        });
    }
    async getOrderCardById(id) {
        return this.orderRepository.findOne({
            where: { id },
            include: [cards_entity_1.CardEntity],
        });
    }
    async saveOrderProducts(orderId, items) {
        return this.orderProductsRepository.bulkCreate(items.map((item) => (Object.assign(Object.assign({}, item), { orderId, status: 1, visits: 0, createdAt: new Date() }))));
    }
    async getProductsByOrders(ids) {
        return this.orderProductsRepository.findAll({
            where: { orderId: ids },
            include: [order_product_status_entity_1.OrderProductStatusEntity],
        });
    }
};
OrdersRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ORDER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.ORDER_PRODUCT_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.ORDER_SUBSCRIPTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], OrdersRepositoryService);
exports.OrdersRepositoryService = OrdersRepositoryService;
//# sourceMappingURL=orders-repository.service.js.map