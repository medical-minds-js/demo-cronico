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
exports.UserAilmentsEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ailment_entity_1 = require("../ailments/ailment.entity");
const user_entity_1 = require("../user/user.entity");
const user_ailments_product_entity_1 = require("../user-fact-info/user-ailments-product/user-ailments-product.entity");
let UserAilmentsEntity = class UserAilmentsEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ailment_entity_1.AilmentEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_AILMENTS', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserAilmentsEntity.prototype, "ailmentsId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TYPE_DETECTION', type: sequelize_typescript_1.DataType.INTEGER({ length: 6 }) }),
    __metadata("design:type", Number)
], UserAilmentsEntity.prototype, "typeDetection", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], UserAilmentsEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_ailments_product_entity_1.UserAilmentsProductEntity),
    __metadata("design:type", Array)
], UserAilmentsEntity.prototype, "userAilmentsProducts", void 0);
UserAilmentsEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_210_user_ailments',
        timestamps: false,
    })
], UserAilmentsEntity);
exports.UserAilmentsEntity = UserAilmentsEntity;
//# sourceMappingURL=user-ailments.entity.js.map