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
exports.UserAilmentsProductEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_ailments_entity_1 = require("../user-ailments/user-ailments.entity");
const product_entity_1 = require("../product/product.entity");
let UserAilmentsProductEntity = class UserAilmentsProductEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsProductEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_ailments_entity_1.UserAilmentsEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER_AILMENTS', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsProductEntity.prototype, "userAilmentsId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.ProductEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_PRODUCT', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsProductEntity.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DOSE', type: sequelize_typescript_1.DataType.DOUBLE(6, 1) }),
    __metadata("design:type", Number)
], UserAilmentsProductEntity.prototype, "dose", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INITIAL_DATE', type: sequelize_typescript_1.DataType.DOUBLE(6, 1) }),
    __metadata("design:type", Number)
], UserAilmentsProductEntity.prototype, "initialDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INTAKE_PERIOD', type: sequelize_typescript_1.DataType.TIME }),
    __metadata("design:type", Date)
], UserAilmentsProductEntity.prototype, "intakePeriod", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FIRST_TAKE', type: sequelize_typescript_1.DataType.TIME }),
    __metadata("design:type", Date)
], UserAilmentsProductEntity.prototype, "firstTake", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_ailments_entity_1.UserAilmentsEntity),
    __metadata("design:type", user_ailments_entity_1.UserAilmentsEntity)
], UserAilmentsProductEntity.prototype, "userAilments", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_entity_1.ProductEntity),
    __metadata("design:type", product_entity_1.ProductEntity)
], UserAilmentsProductEntity.prototype, "product", void 0);
UserAilmentsProductEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_214_user_ailments_products',
        timestamps: false,
    })
], UserAilmentsProductEntity);
exports.UserAilmentsProductEntity = UserAilmentsProductEntity;
//# sourceMappingURL=user-ailments-product.entity.js.map