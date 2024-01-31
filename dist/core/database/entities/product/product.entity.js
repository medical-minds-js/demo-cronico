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
exports.ProductEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sale_entity_1 = require("../sales/sale.entity");
const ailment_entity_1 = require("../ailments/ailment.entity");
const supply_entity_1 = require("../supplies/supply.entity");
const product_parts_entity_1 = require("../product-parts/product-parts.entity");
const product_images_entity_1 = require("../product-images/product-images.entity");
const shopping_cart_entity_1 = require("../shopping-carts/shopping-cart.entity");
const product_ailments_entity_1 = require("../product-ailments/product-ailments.entity");
const user_ailments_product_entity_1 = require("../user-fact-info/user-ailments-product/user-ailments-product.entity");
let ProductEntity = class ProductEntity extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.searchType = 1;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => supply_entity_1.SupplyEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUPPLY',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "supplyId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'NAME',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'DESCRIPTION',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PRESENTATION',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "presentation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PRESENTATION_FULL',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "presentationFull", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PIECES_PER_BOX',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "piecesPerBox", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LABORATORY_NAME',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "laboratoryName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ACTIVE_INGREDIENT',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "activeIngredient", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'CONTENT',
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'FREE_COUNT',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "freeCount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PRICE',
        type: sequelize_typescript_1.DataType.DOUBLE,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PRODUCT_TYPE',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "productType", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => sale_entity_1.SaleEntity),
    __metadata("design:type", Array)
], ProductEntity.prototype, "sales", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => ailment_entity_1.AilmentEntity, {
        through: { model: () => product_ailments_entity_1.ProductAilmentsEntity },
        foreignKey: 'productId',
    }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "ailments", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => supply_entity_1.SupplyEntity),
    __metadata("design:type", supply_entity_1.SupplyEntity)
], ProductEntity.prototype, "supply", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_parts_entity_1.ProductPartEntity),
    __metadata("design:type", Array)
], ProductEntity.prototype, "productParts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_images_entity_1.ProductImageEntity),
    __metadata("design:type", Array)
], ProductEntity.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => shopping_cart_entity_1.ShoppingCartEntity),
    __metadata("design:type", Array)
], ProductEntity.prototype, "shoppings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_ailments_product_entity_1.UserAilmentsProductEntity),
    __metadata("design:type", Array)
], ProductEntity.prototype, "userAilmentsProducts", void 0);
ProductEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_107_products',
        createdAt: false,
        updatedAt: false,
    })
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map