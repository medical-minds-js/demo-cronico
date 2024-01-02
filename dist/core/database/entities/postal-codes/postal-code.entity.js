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
exports.PostalCodeEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let PostalCodeEntity = class PostalCodeEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'POSTAL_CODE', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "postalCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SETTLEMENT', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], PostalCodeEntity.prototype, "settlement", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SETTLEMENT_TYPE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], PostalCodeEntity.prototype, "settlementType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'MUNICIPALITY', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], PostalCodeEntity.prototype, "municipality", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], PostalCodeEntity.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'KEY_STATE', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "keyState", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CITY', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], PostalCodeEntity.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IS_AVAILABLE_FACTINFO', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "isAvailableFactInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IS_AVAILABLE_ADDRESS', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "isAVailableAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IS_ACTIVE', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostalCodeEntity.prototype, "isActive", void 0);
PostalCodeEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_009_postal_codes',
        createdAt: false,
        updatedAt: false,
    })
], PostalCodeEntity);
exports.PostalCodeEntity = PostalCodeEntity;
//# sourceMappingURL=postal-code.entity.js.map