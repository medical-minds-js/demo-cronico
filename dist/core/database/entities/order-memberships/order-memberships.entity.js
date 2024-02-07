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
exports.OrderMembershipsEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_entity_1 = require("../order/order.entity");
const order_memberships_status_entity_1 = require("../order-memberships-status/order-memberships-status.entity");
let OrderMembershipsEntity = class OrderMembershipsEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_entity_1.OrderEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_ORDER',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_MEMBERSHIPS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "membershipsId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_memberships_status_entity_1.OrderMembershipsStatusEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "statusId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], OrderMembershipsEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EXPIRATION_DATE', type: sequelize_typescript_1.DataType.DATEONLY }),
    __metadata("design:type", Date)
], OrderMembershipsEntity.prototype, "expirationDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PIECES', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRICE', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBTOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DISCOUNT', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTAL', type: sequelize_typescript_1.DataType.DOUBLE(8, 2) }),
    __metadata("design:type", Number)
], OrderMembershipsEntity.prototype, "total", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], OrderMembershipsEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_entity_1.OrderEntity),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderMembershipsEntity.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_memberships_status_entity_1.OrderMembershipsStatusEntity),
    __metadata("design:type", order_memberships_status_entity_1.OrderMembershipsStatusEntity)
], OrderMembershipsEntity.prototype, "status", void 0);
OrderMembershipsEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_113_order_memberships',
        updatedAt: false,
    })
], OrderMembershipsEntity);
exports.OrderMembershipsEntity = OrderMembershipsEntity;
//# sourceMappingURL=order-memberships.entity.js.map