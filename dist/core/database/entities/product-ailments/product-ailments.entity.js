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
exports.ProductAilmentsEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
const ailment_entity_1 = require("../ailments/ailment.entity");
let ProductAilmentsEntity = class ProductAilmentsEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ProductAilmentsEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.ProductEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_PRODUCT',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductAilmentsEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ailment_entity_1.AilmentEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_AILMENTS',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductAilmentsEntity.prototype, "ailmentsId", void 0);
ProductAilmentsEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_207_products_ailments',
        createdAt: false,
        updatedAt: false,
    })
], ProductAilmentsEntity);
exports.ProductAilmentsEntity = ProductAilmentsEntity;
//# sourceMappingURL=product-ailments.entity.js.map