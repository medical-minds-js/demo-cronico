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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingService = void 0;
const common_1 = require("@nestjs/common");
const subscriptions_repository_service_1 = require("./subscriptions-repository.service");
const orders_repository_service_1 = require("./orders-repository.service");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const products_service_1 = require("../products/products.service");
const wms_customer_requirement_repository_service_1 = require("./wms-customer-requirement-repository.service");
const users_service_1 = require("../users/users.service");
const fail_response_1 = require("../../core/clases/fail.response");
let ShoppingService = class ShoppingService {
    async createOrder(confirmOrder, order, subscriptions) {
        const saved = await this.orderRepository.saveFullOrder(order);
        await this.subscriptionsService.updateOrderId(saved.id, subscriptions.map((item) => item.id));
        const newOrder = Object.assign(Object.assign({}, order), { id: saved.id });
        const user = await this.userService.getById(order.userId);
        let paymentProcessed;
        try {
            paymentProcessed = await this.openPayService.processPayment(confirmOrder, newOrder, user);
        }
        catch (e) {
            throw new fail_response_1.FailResponse(e.error_message);
        }
        if (paymentProcessed.status === 'completed') {
            await this.orderRepository.changePaidStatus(newOrder.id, paymentProcessed.id);
            await this.orderRepository.changePaidStatus(newOrder.id, paymentProcessed.id);
            await this.subscriptionsService.changePaidStatus(subscriptions);
            await Promise.all(subscriptions.map((item) => this.sendRequiementWms(order.user.id, item)));
            return newOrder;
        }
        else {
            await this.orderRepository.changeNoPaymentStatus(newOrder.id);
            this.subscriptionsService.changeNoPaymentStatus(subscriptions.map((item) => item.id));
            throw new Error('Error al procesar el pago');
        }
    }
    async sendRequiementWms(userId, subscription) {
        const syncData = await this.generateSyncData(subscription);
        await this.wmsCustomerRequirementRepositoryService.saveOrder(userId, syncData);
    }
    async generateSyncData(subscription) {
        const ids = subscription.products.map((element) => element.productId);
        const products = await this.productsService.viewProductByIds(ids);
        const syncData = [];
        subscription.products.forEach((item) => {
            const product = products.find((product) => product.id === item.productId);
            if (product.productType === 2) {
                product.products.forEach((part) => {
                    syncData.push({
                        quantity: item.pieces,
                        shortKey: part.supply.shortKey,
                    });
                });
            }
            syncData.push({
                quantity: item.pieces,
                shortKey: product.supply.shortKey,
            });
        });
        return syncData;
    }
    async getShopingById(id) {
        const { items, total } = await this.getListShoppping(null, { page: 1, itemsPerPage: 1 }, id);
        if (total === 0) {
            throw new common_1.NotFoundException('No se encontró la suscripción');
        }
        return items[0];
    }
    async getListShoppping(userId, options, id) {
        const total = await this.subscriptionsService.countSubscriptionByUserId(id, userId);
        if (total === 0) {
            return { items: [], total };
        }
        const subscriptions = await this.subscriptionsService.findSubscriptionByUserId(id, userId, options);
        if (subscriptions.length === 0) {
            return { items: [], total };
        }
        const subcriptionProducts = await this.subscriptionsService.findSubscriptionProductByIds(subscriptions.map((i) => i.id));
        const orders = await this.orderRepository.getOrderBySubscriptionIds(subscriptions.map((item) => item.id));
        const orderProducts = await this.orderRepository.getProductsByOrders(orders.map((item) => item.id));
        const images = await this.productsService.viewImagesByIds(subcriptionProducts.map((item) => item.productId));
        let card = null;
        if (id) {
            const tempOrder = orders.filter((i) => i.subscriptions.map((i) => i.id).includes(subscriptions[0].id));
            card = await this.getOrderCard(tempOrder[0].userId, tempOrder[0].id);
        }
        const items = subscriptions.map((item) => {
            const items = subcriptionProducts
                .filter((element) => element.subscriptionId === item.id)
                .map((element) => {
                const data = element.get({ plain: true });
                data.product.images = images.filter((img) => img.productId === data.productId);
                return data;
            });
            const foundOrders = orders
                .filter((i) => i.subscriptions.map((i) => i.id).includes(item.id))
                .map((order) => {
                const _a = order.get({ plain: true }), { subscriptions } = _a, rest = __rest(_a, ["subscriptions"]);
                return Object.assign(Object.assign({}, rest), { card, orderProducts: orderProducts
                        .map((i) => i.get({ plain: true }))
                        .filter((i) => i.orderId === order.id) });
            });
            return Object.assign(Object.assign({}, item.get({ plain: true })), { items, orders: foundOrders });
        });
        return { items, total };
    }
    async findSuscriptionsByUserId(userId) {
        const data = await this.subscriptionsService.findSubscriptionByUserId(null, userId, { page: 1, itemsPerPage: 10 });
        return data.map((item) => {
            const rest = __rest(item.get({ plain: true }), []);
            return rest;
        });
    }
    async findOrdersByUserId(userId) {
        const data = await this.orderRepository.findOrdersByUserId(userId);
        return data.map((item) => {
            const rest = __rest(item.get({ plain: true }), []);
            return rest;
        });
    }
    async getOrderCard(userId, orderId) {
        const user = await this.userService.getById(userId);
        const order = await this.orderRepository.getOrderCardById(orderId);
        const card = await this.openPayService.getCardById(user.openPayId, order.card.cardOpenPayId);
        return card;
    }
};
__decorate([
    (0, common_1.Inject)(subscriptions_repository_service_1.SubscriptionsRepositoryService),
    __metadata("design:type", subscriptions_repository_service_1.SubscriptionsRepositoryService)
], ShoppingService.prototype, "subscriptionsService", void 0);
__decorate([
    (0, common_1.Inject)(orders_repository_service_1.OrdersRepositoryService),
    __metadata("design:type", orders_repository_service_1.OrdersRepositoryService)
], ShoppingService.prototype, "orderRepository", void 0);
__decorate([
    (0, common_1.Inject)(wms_customer_requirement_repository_service_1.WmsCustomerRequirementRepositoryService),
    __metadata("design:type", wms_customer_requirement_repository_service_1.WmsCustomerRequirementRepositoryService)
], ShoppingService.prototype, "wmsCustomerRequirementRepositoryService", void 0);
__decorate([
    (0, common_1.Inject)(open_pay_service_1.OpenPayService),
    __metadata("design:type", open_pay_service_1.OpenPayService)
], ShoppingService.prototype, "openPayService", void 0);
__decorate([
    (0, common_1.Inject)(products_service_1.ProductsService),
    __metadata("design:type", products_service_1.ProductsService)
], ShoppingService.prototype, "productsService", void 0);
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], ShoppingService.prototype, "userService", void 0);
ShoppingService = __decorate([
    (0, common_1.Injectable)()
], ShoppingService);
exports.ShoppingService = ShoppingService;
//# sourceMappingURL=shopping.service.js.map