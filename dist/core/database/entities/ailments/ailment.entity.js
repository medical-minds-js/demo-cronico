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
exports.AilmentEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../product/product.entity");
const product_ailments_entity_1 = require("../product-ailments/product-ailments.entity");
const ailment_images_entity_1 = require("../ailments-images/ailment-images.entity");
const user_ailments_entity_1 = require("../user-ailments/user-ailments.entity");
const user_entity_1 = require("../user/user.entity");
let AilmentEntity = class AilmentEntity extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.searchType = 2;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], AilmentEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => product_entity_1.ProductEntity, {
        through: { model: () => product_ailments_entity_1.ProductAilmentsEntity },
        foreignKey: 'ailmentsId',
    }),
    __metadata("design:type", Array)
], AilmentEntity.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AilmentEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DESCRIPTION', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AilmentEntity.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ailment_images_entity_1.AilmentsImageEntity),
    __metadata("design:type", Array)
], AilmentEntity.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_ailments_entity_1.ProductAilmentsEntity),
    __metadata("design:type", Array)
], AilmentEntity.prototype, "productParts", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_entity_1.UserEntity, {
        through: { model: () => user_ailments_entity_1.UserAilmentsEntity },
        as: 'userAilmentsEntity',
        foreignKey: 'ailmentsId',
    }),
    __metadata("design:type", Array)
], AilmentEntity.prototype, "users", void 0);
AilmentEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_109_ailments',
        createdAt: false,
        updatedAt: false,
    })
], AilmentEntity);
exports.AilmentEntity = AilmentEntity;
//# sourceMappingURL=ailment.entity.js.map