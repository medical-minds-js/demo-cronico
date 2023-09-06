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
exports.OrderEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_status_entity_1 = require("../order-status/order-status.entity");
const user_entity_1 = require("../user/user.entity");
const cards_entity_1 = require("../cards/cards.entity");
const order_product_entity_1 = require("../order-products/order-product.entity");
const subscription_entity_1 = require("../subscription/subscription.entity");
let OrderEntity = class OrderEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_entity_1.SubscriptionEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUBSCRIPTION',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "subscriptionId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_ORDER_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "orderStatusId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_USER',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cards_entity_1.CardEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_CARD',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "cardId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'TOTAL',
        type: sequelize_typescript_1.DataType.DOUBLE(8, 2),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "street", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET_NUMBER', type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "streetNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBURB', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "suburb", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CP', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "cp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LOCATION', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], OrderEntity.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'COMMENTS', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "comments", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'REFERENCE', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], OrderEntity.prototype, "reference", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'START_TIME',
        type: sequelize_typescript_1.DataType.TIME,
    }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "startTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'END_TIME',
        type: sequelize_typescript_1.DataType.TIME,
    }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "endTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'DELIVERY_DATE',
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "deliveryDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'WHO_RECEIVES',
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "whoReceives", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'RELATIONSHIP',
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "relationShip", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'VISITS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 3 }),
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "visits", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PAYMENT_ID',
        type: sequelize_typescript_1.DataType.STRING(200),
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PAYMENT_CODE',
        type: sequelize_typescript_1.DataType.STRING(200),
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentCode", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subscription_entity_1.SubscriptionEntity),
    __metadata("design:type", subscription_entity_1.SubscriptionEntity)
], OrderEntity.prototype, "subscription", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_status_entity_1.OrderStatusEntity, 'id'),
    __metadata("design:type", order_status_entity_1.OrderStatusEntity)
], OrderEntity.prototype, "orderStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cards_entity_1.CardEntity),
    __metadata("design:type", cards_entity_1.CardEntity)
], OrderEntity.prototype, "card", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_product_entity_1.OrderProductEntity),
    __metadata("design:type", Array)
], OrderEntity.prototype, "orderProducts", void 0);
OrderEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_102_orders',
        updatedAt: false,
    })
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map