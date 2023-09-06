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
exports.SupplyEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
let SupplyEntity = class SupplyEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID_SUPPLY', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SupplyEntity.prototype, "supplyId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'KEY', type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], SupplyEntity.prototype, "key", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SHORT_KEY', type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], SupplyEntity.prototype, "shortKey", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], SupplyEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRESENTATION', type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], SupplyEntity.prototype, "presentation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TYPE', type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], SupplyEntity.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ID_RACK', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SupplyEntity.prototype, "rackId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ID_IMAGE', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SupplyEntity.prototype, "imageId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_entity_1.ProductEntity),
    __metadata("design:type", Array)
], SupplyEntity.prototype, "products", void 0);
SupplyEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'map_t_010_supplies',
        createdAt: false,
        updatedAt: false,
    })
], SupplyEntity);
exports.SupplyEntity = SupplyEntity;
//# sourceMappingURL=supply.entity.js.map