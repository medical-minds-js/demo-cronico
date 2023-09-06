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
exports.SubscriptionProductEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
const sale_entity_1 = require("../sales/sale.entity");
const subscription_entity_1 = require("../subscription/subscription.entity");
const subscription_product_status_entity_1 = require("../subscription-product-status/subscription-product-status.entity");
const dose_taken_entity_1 = require("../doses_taken/dose-taken.entity");
let SubscriptionProductEntity = class SubscriptionProductEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_entity_1.SubscriptionEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_SUBSCRIPTION', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "subscriptionId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_product_status_entity_1.SubscriptionProductStatusEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_STATUS', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "statusId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.ProductEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_PRODUCT', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => sale_entity_1.SaleEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_SALE', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "saleId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PERIOD', type: sequelize_typescript_1.DataType.INTEGER({ length: 3 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "period", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DOSE', type: sequelize_typescript_1.DataType.DOUBLE(6, 1) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "dose", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PIECES', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRICE', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBTOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DISCOUNT', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "total", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], SubscriptionProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TAKE_DOSE', type: sequelize_typescript_1.DataType.DOUBLE(6, 1) }),
    __metadata("design:type", Number)
], SubscriptionProductEntity.prototype, "takeDose", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INITIAL_TAKE', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], SubscriptionProductEntity.prototype, "initialTake", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INTAKE_PERIOD', type: sequelize_typescript_1.DataType.TIME }),
    __metadata("design:type", Date)
], SubscriptionProductEntity.prototype, "intakePeriod", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FIRST_TAKE', type: sequelize_typescript_1.DataType.TIME }),
    __metadata("design:type", Date)
], SubscriptionProductEntity.prototype, "firstTake", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_entity_1.ProductEntity),
    __metadata("design:type", product_entity_1.ProductEntity)
], SubscriptionProductEntity.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => sale_entity_1.SaleEntity),
    __metadata("design:type", sale_entity_1.SaleEntity)
], SubscriptionProductEntity.prototype, "sale", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subscription_product_status_entity_1.SubscriptionProductStatusEntity),
    __metadata("design:type", subscription_product_status_entity_1.SubscriptionProductStatusEntity)
], SubscriptionProductEntity.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => dose_taken_entity_1.DoseTakenEntity),
    __metadata("design:type", Array)
], SubscriptionProductEntity.prototype, "dosesTaken", void 0);
SubscriptionProductEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_110_subscription_products',
        updatedAt: false,
        createdAt: true,
    })
], SubscriptionProductEntity);
exports.SubscriptionProductEntity = SubscriptionProductEntity;
//# sourceMappingURL=subscription-product.entity.js.map