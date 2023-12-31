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
exports.ShoppingCartService = void 0;
const common_1 = require("@nestjs/common");
const shopping_cart_repository_service_1 = require("./shopping-cart-repository.service");
const address_service_1 = require("../address/address.service");
const cards_service_1 = require("../cards/cards.service");
const shopping_service_1 = require("../shopping/shopping.service");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
const subscriptions_repository_service_1 = require("../shopping/subscriptions-repository.service");
let ShoppingCartService = class ShoppingCartService {
    async findByUserId(userId) {
        const data = await this.shoppingCartRepository.findItemsByIdUser(userId);
        return data.map((item) => {
            const rest = __rest(item.get({ plain: true }), []);
            return rest;
        });
    }
    async save(userId, shoppingCart) {
        const previousProduct = await this.shoppingCartRepository.findPreviousProductByUser(userId, shoppingCart.productId);
        if (previousProduct) {
            const previousProductData = previousProduct.get({ plain: true });
            previousProductData.dose += shoppingCart.dose;
            previousProductData.pieces += shoppingCart.pieces;
            previousProductData.subtotal =
                shoppingCart.pieces * previousProduct.product.price;
            previousProductData.discount = 0;
            previousProductData.total +=
                previousProductData.subtotal - previousProductData.discount;
            await this.shoppingCartRepository.update(previousProduct.id, previousProductData);
            return previousProductData;
        }
        else {
            const product = await this.productsService.getProductById(shoppingCart.productId);
            shoppingCart.subtotal = shoppingCart.pieces * product.price;
            shoppingCart.discount = 0;
            shoppingCart.total = shoppingCart.subtotal - shoppingCart.discount;
            shoppingCart.userId = userId;
            const data = await this.shoppingCartRepository.save(shoppingCart);
            return data.get({ plain: true });
        }
    }
    async delete(id) {
        const cartFinded = await this.shoppingCartRepository.findOneById(id);
        if (cartFinded == null) {
            return -1;
        }
        return await this.shoppingCartRepository.delete(id);
    }
    async updateCart(userId, id, shoppingCart) {
        const cartFinded = await this.shoppingCartRepository.findOneById(id);
        if (!cartFinded) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        const product = await this.productsService.getProductById(shoppingCart.productId);
        shoppingCart.subtotal = shoppingCart.pieces * product.price;
        shoppingCart.discount = 0;
        shoppingCart.total = shoppingCart.subtotal - shoppingCart.discount;
        shoppingCart.userId = userId;
        const data = await this.shoppingCartRepository.update(id, shoppingCart);
        return data;
    }
    async confirmOrder(userId, confirmOrder) {
        const user = await this.userService.getById(userId);
        const products = await this.shoppingCartRepository.findItemsByIdUser(userId);
        const subcription30 = products.filter((i) => Number(i.period) === 30);
        const subcription15 = products.filter((i) => Number(i.period) === 15);
        const process = [];
        if (subcription30.length > 0) {
            process.push(subcription30);
        }
        if (subcription15.length > 0) {
            process.push(subcription15);
        }
        const subscriptions = await Promise.all(process.map((products) => this.saveSubscription(userId, products)));
        const address = await this.addressService.findActiveByUserId(userId);
        const card = await this.cardsService.getActiveByUser(userId);
        const rangeTimes = address.deliveryTimes
            .map((i) => i.startTime + '-' + i.endTime)
            .join(', ');
        let name = products.map((i) => i.product.name).join(', ');
        if (products.length > 3) {
            name =
                products[0].product.name +
                    ' y ' +
                    (products.length - 1) +
                    ' productos más';
        }
        const order = {
            orderStatusId: 1,
            userId,
            cardId: card.id,
            name,
            total: products.reduce((prev, curr) => prev + curr.total, 0),
            street: address.street,
            streetNumber: address.streetNumber,
            suburb: address.suburb,
            cp: address.cp,
            location: address.location,
            state: address.state,
            comments: address.comments,
            reference: address.reference,
            deliveryDate: new Date(),
            rangeTimes: rangeTimes,
            visits: 0,
            user: user.get({ plain: true }),
            card: card.get({ plain: true }),
            orderProducts: products.map((i) => {
                const data = i.get({ plain: true });
                return Object.assign(Object.assign({}, data), { id: null, statusId: 1, price: data.product.price });
            }),
        };
        order.deliveryDate.setDate(order.deliveryDate.getDate() + 2);
        let orderCreated;
        try {
            orderCreated = await this.shoppingService.createOrder(confirmOrder, order, subscriptions);
            const products = await this.shoppingCartRepository.cleanShoppingCart(userId);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return orderCreated;
    }
    async saveSubscription(userId, products) {
        let name = products.map((i) => i.product.name).join(', ');
        if (products.length > 3) {
            name =
                products[0].product.name +
                    ' y ' +
                    (products.length - 1) +
                    ' productos más';
        }
        const subcription = {
            subscriptionStatusId: 1,
            userId,
            name,
            period: products[0].period,
            pieces: products.reduce((prev, curr) => prev + curr.pieces, 0),
            subtotal: products.reduce((prev, curr) => prev + curr.subtotal, 0),
            discount: products.reduce((prev, curr) => prev + curr.discount, 0),
            total: products.reduce((prev, curr) => prev + curr.total, 0),
        };
        const subcriptionProducts = products.map((i) => {
            const { period, dose, pieces, subtotal, discount, total, product } = i.get({
                plain: true,
            });
            return {
                statusId: 1,
                userId,
                productId: product.id,
                saleId: product.sale ? product.sale.id : null,
                period,
                dose,
                price: product.price,
                pieces,
                subtotal,
                discount,
                total,
            };
        });
        const saved = await this.subscriptionsService.saveSubscription(subcription, subcriptionProducts);
        return this.subscriptionsService.findFullSubscriptionById(saved.id);
    }
};
__decorate([
    (0, common_1.Inject)(shopping_cart_repository_service_1.ShoppingCartRepositoryService),
    __metadata("design:type", shopping_cart_repository_service_1.ShoppingCartRepositoryService)
], ShoppingCartService.prototype, "shoppingCartRepository", void 0);
__decorate([
    (0, common_1.Inject)(address_service_1.AddressService),
    __metadata("design:type", address_service_1.AddressService)
], ShoppingCartService.prototype, "addressService", void 0);
__decorate([
    (0, common_1.Inject)(cards_service_1.CardsService),
    __metadata("design:type", cards_service_1.CardsService)
], ShoppingCartService.prototype, "cardsService", void 0);
__decorate([
    (0, common_1.Inject)(shopping_service_1.ShoppingService),
    __metadata("design:type", shopping_service_1.ShoppingService)
], ShoppingCartService.prototype, "shoppingService", void 0);
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], ShoppingCartService.prototype, "userService", void 0);
__decorate([
    (0, common_1.Inject)(products_service_1.ProductsService),
    __metadata("design:type", products_service_1.ProductsService)
], ShoppingCartService.prototype, "productsService", void 0);
__decorate([
    (0, common_1.Inject)(subscriptions_repository_service_1.SubscriptionsRepositoryService),
    __metadata("design:type", subscriptions_repository_service_1.SubscriptionsRepositoryService)
], ShoppingCartService.prototype, "subscriptionsService", void 0);
ShoppingCartService = __decorate([
    (0, common_1.Injectable)()
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map