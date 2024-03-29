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
exports.OrderMembershipsStatusEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_memberships_entity_1 = require("../order-memberships/order-memberships.entity");
let OrderMembershipsStatusEntity = class OrderMembershipsStatusEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], OrderMembershipsStatusEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], OrderMembershipsStatusEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_memberships_entity_1.OrderMembershipsEntity),
    __metadata("design:type", Array)
], OrderMembershipsStatusEntity.prototype, "orderMemberships", void 0);
OrderMembershipsStatusEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_012_order_memberships_status',
        timestamps: false,
    })
], OrderMembershipsStatusEntity);
exports.OrderMembershipsStatusEntity = OrderMembershipsStatusEntity;
//# sourceMappingURL=order-memberships-status.entity.js.map