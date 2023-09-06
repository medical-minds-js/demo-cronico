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
exports.ProductImageEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
let ProductImageEntity = class ProductImageEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], ProductImageEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.ProductEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_PRODUCT',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], ProductImageEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'URL',
        type: sequelize_typescript_1.DataType.STRING(250),
    }),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_entity_1.ProductEntity, 'productId'),
    __metadata("design:type", product_entity_1.ProductEntity)
], ProductImageEntity.prototype, "images", void 0);
ProductImageEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_205_product_images',
        createdAt: false,
        updatedAt: false,
    })
], ProductImageEntity);
exports.ProductImageEntity = ProductImageEntity;
//# sourceMappingURL=product-images.entity.js.map