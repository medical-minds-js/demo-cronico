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
exports.SupplyRequestEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SupplyRequestEntity = class SupplyRequestEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SupplyRequestEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", Number)
], SupplyRequestEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EMAIL', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", Number)
], SupplyRequestEntity.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUPPLY', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], SupplyRequestEntity.prototype, "supply", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'MESSAGE', type: sequelize_typescript_1.DataType.STRING(255) }),
    __metadata("design:type", String)
], SupplyRequestEntity.prototype, "message", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'REASON', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], SupplyRequestEntity.prototype, "reason", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'created_at', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], SupplyRequestEntity.prototype, "createdAt", void 0);
SupplyRequestEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_111_supply_requests',
        updatedAt: false,
    })
], SupplyRequestEntity);
exports.SupplyRequestEntity = SupplyRequestEntity;
//# sourceMappingURL=supply-request.entity.js.map