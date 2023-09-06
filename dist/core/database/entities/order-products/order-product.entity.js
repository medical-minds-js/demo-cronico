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
exports.OrderProductEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_entity_1 = require("../order/order.entity");
const order_product_status_entity_1 = require("../order-product-status/order-product-status.entity");
let OrderProductEntity = class OrderProductEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_PRODUCT',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_entity_1.OrderEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_ORDER',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUBSCRIPTION',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "subscriptionId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SALE',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "saleId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_product_status_entity_1.OrderProductStatusEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "statusId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'F_IdLote',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "loteId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BATCH_CODE', type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "batchCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EXPIRATION_DATE', type: sequelize_typescript_1.DataType.DATEONLY }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "expirationDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PIECES', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRICE', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBTOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DISCOUNT', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "total", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], OrderProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_entity_1.OrderEntity),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderProductEntity.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_product_status_entity_1.OrderProductStatusEntity),
    __metadata("design:type", order_product_status_entity_1.OrderProductStatusEntity)
], OrderProductEntity.prototype, "status", void 0);
OrderProductEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_103_order_products',
        updatedAt: false,
    })
], OrderProductEntity);
exports.OrderProductEntity = OrderProductEntity;
//# sourceMappingURL=order-product.entity.js.map