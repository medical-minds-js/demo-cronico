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
exports.ShoppingCartRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const product_entity_1 = require("../../core/database/entities/product/product.entity");
const sale_entity_1 = require("../../core/database/entities/sales/sale.entity");
let ShoppingCartRepositoryService = class ShoppingCartRepositoryService {
    constructor(shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }
    async findItemsByIdUser(userId) {
        return await this.shoppingCartRepository.findAll({
            where: { userId: [userId] },
            include: [{ model: product_entity_1.ProductEntity, as: 'product', include: [sale_entity_1.SaleEntity] }],
        });
    }
    async save(shoppingCart) {
        return await this.shoppingCartRepository.create({
            userId: shoppingCart.userId,
            productId: shoppingCart.productId,
            dose: shoppingCart.dose,
            period: shoppingCart.period,
            pieces: shoppingCart.pieces,
            subtotal: shoppingCart.subtotal,
            discount: shoppingCart.discount,
            total: shoppingCart.total,
        });
    }
    async delete(id) {
        return await this.shoppingCartRepository.destroy({
            where: { id: [id] },
        });
    }
    async findOneById(id) {
        return this.shoppingCartRepository.findOne({
            where: { id: [id] },
        });
    }
    async findPreviousProductByUser(userId, productId) {
        return await this.shoppingCartRepository.findOne({
            where: { userId, productId },
            include: [{ model: product_entity_1.ProductEntity, as: 'product' }],
        });
    }
    async update(id, shoppingCart) {
        return await this.shoppingCartRepository.update({
            userId: shoppingCart.userId,
            productId: shoppingCart.productId,
            dose: shoppingCart.dose,
            period: shoppingCart.period,
            pieces: shoppingCart.pieces,
            subtotal: shoppingCart.subtotal,
            discount: shoppingCart.discount,
            total: shoppingCart.total,
        }, { where: { id } });
    }
    async cleanShoppingCart(userId) {
        return this.shoppingCartRepository.destroy({
            where: { userId },
        });
    }
};
ShoppingCartRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.SHOPPING_CART_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ShoppingCartRepositoryService);
exports.ShoppingCartRepositoryService = ShoppingCartRepositoryService;
//# sourceMappingURL=shopping-cart-repository.service.js.map