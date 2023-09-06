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
exports.ShoppingEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_entity_1 = require("../order/order.entity");
const shopping_status_entity_1 = require("../shooping-status/shopping-status.entity");
let ShoppingEntity = class ShoppingEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_PRODUCT',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_entity_1.OrderEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_ORDER',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_USER',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUBSCRIPTION',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "subscriptionId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SALE',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "saleId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => shopping_status_entity_1.ShoppingStatusEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SHOPPING_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "shoppingStatusId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'F_IdLote',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "loteId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BATCH_CODE', type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "batchCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EXPIRATION_DATE', type: sequelize_typescript_1.DataType.DATEONLY }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "expirationDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PIECES', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRICE', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBTOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DISCOUNT', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], ShoppingEntity.prototype, "total", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], ShoppingEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_entity_1.OrderEntity),
    __metadata("design:type", Date)
], ShoppingEntity.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => shopping_status_entity_1.ShoppingStatusEntity),
    __metadata("design:type", Date)
], ShoppingEntity.prototype, "shoppingStatus", void 0);
ShoppingEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_103_shopping',
        updatedAt: false,
    })
], ShoppingEntity);
exports.ShoppingEntity = ShoppingEntity;
//# sourceMappingURL=shopping.entity.js.map