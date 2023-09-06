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
exports.DoseTakenEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const order_entity_1 = require("../order/order.entity");
let DoseTakenEntity = class DoseTakenEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ACTIVE', type: sequelize_typescript_1.DataType.INTEGER({ length: 2 }) }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ID_CARD_OPENPAY', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], DoseTakenEntity.prototype, "cardOpenPayId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'created_at', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], DoseTakenEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], DoseTakenEntity.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_entity_1.OrderEntity),
    __metadata("design:type", order_entity_1.OrderEntity)
], DoseTakenEntity.prototype, "orders", void 0);
DoseTakenEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_201_cards',
        updatedAt: false,
    })
], DoseTakenEntity);
exports.DoseTakenEntity = DoseTakenEntity;
//# sourceMappingURL=cards.entity.js.map