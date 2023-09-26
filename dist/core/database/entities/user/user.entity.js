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
exports.UserEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const profile_entity_1 = require("../profile/profile.entity");
const address_entity_1 = require("../address/address.entity");
const order_entity_1 = require("../order/order.entity");
const cards_entity_1 = require("../cards/cards.entity");
const ailment_entity_1 = require("../ailments/ailment.entity");
const user_ailments_entity_1 = require("../user-ailments/user-ailments.entity");
const setting_entity_1 = require("../settings/setting.entity");
const user_setting_entity_1 = require("../user-setting/user-setting.entity");
const user_fact_info_entity_1 = require("../user-fact-info/user-fact-info.entity");
let UserEntity = class UserEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ID_PROFILE', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", String)
], UserEntity.prototype, "profileId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SURNAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SECOND_SURNAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "secondSurname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BIRTH_DATE', type: sequelize_typescript_1.DataType.DATEONLY }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PICTURE', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], UserEntity.prototype, "picture", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'USER_NAME', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EMAIL', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CELL_PHONE', type: sequelize_typescript_1.DataType.STRING(10) }),
    __metadata("design:type", String)
], UserEntity.prototype, "cellPhone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'GENDER', type: sequelize_typescript_1.DataType.INTEGER({ length: 1 }) }),
    __metadata("design:type", Number)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATUS_INFO', type: sequelize_typescript_1.DataType.INTEGER({ length: 1 }) }),
    __metadata("design:type", Number)
], UserEntity.prototype, "statusInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PASS', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], UserEntity.prototype, "pass", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SALT', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ENABLE_OPENPAY', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], UserEntity.prototype, "enableOpenPay", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'OPENPAY_ID', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], UserEntity.prototype, "openPayId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => profile_entity_1.ProfileEntity, 'profileId'),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], UserEntity.prototype, "profile", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => address_entity_1.AddressEntity),
    __metadata("design:type", address_entity_1.AddressEntity)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_entity_1.OrderEntity),
    __metadata("design:type", order_entity_1.OrderEntity)
], UserEntity.prototype, "orders", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cards_entity_1.CardEntity),
    __metadata("design:type", cards_entity_1.CardEntity)
], UserEntity.prototype, "cards", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => ailment_entity_1.AilmentEntity, {
        through: { model: () => user_ailments_entity_1.UserAilmentsEntity },
        foreignKey: 'userId',
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "ailments", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => setting_entity_1.SettingEntity, {
        through: { model: () => user_setting_entity_1.UserSettingEntity },
        foreignKey: 'userId',
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "settings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_fact_info_entity_1.UserFactInfoEntity),
    __metadata("design:type", user_fact_info_entity_1.UserFactInfoEntity)
], UserEntity.prototype, "factInfo", void 0);
UserEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_101_users',
        updatedAt: false,
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map