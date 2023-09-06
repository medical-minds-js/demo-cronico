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
exports.SubscriptionEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
const user_entity_1 = require("../user/user.entity");
const sale_entity_1 = require("../sales/sale.entity");
const subscription_status_entity_1 = require("../subscription-status/subscription-status.entity");
let SubscriptionEntity = class SubscriptionEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.ProductEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_PRODUCT', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => sale_entity_1.SaleEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_SALE', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "saleId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_status_entity_1.SubscriptionStatusEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUBSCRIPTION_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "subscriptionStatusId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PERIOD', type: sequelize_typescript_1.DataType.INTEGER({ length: 3 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "period", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DOSE', type: sequelize_typescript_1.DataType.DOUBLE(6, 1) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "dose", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PIECES', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRICE', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBTOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DISCOUNT', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NEXT_DELIVERY', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], SubscriptionEntity.prototype, "nextDelivery", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], SubscriptionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_entity_1.ProductEntity),
    __metadata("design:type", product_entity_1.ProductEntity)
], SubscriptionEntity.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], SubscriptionEntity.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => sale_entity_1.SaleEntity),
    __metadata("design:type", sale_entity_1.SaleEntity)
], SubscriptionEntity.prototype, "sale", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subscription_status_entity_1.SubscriptionStatusEntity),
    __metadata("design:type", subscription_status_entity_1.SubscriptionStatusEntity)
], SubscriptionEntity.prototype, "subscriptionStatus", void 0);
SubscriptionEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_108_subscriptions',
        updatedAt: false,
        createdAt: true,
    })
], SubscriptionEntity);
exports.SubscriptionEntity = SubscriptionEntity;
//# sourceMappingURL=subscription.entity.js.map