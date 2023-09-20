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
exports.UserSettingEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const setting_entity_1 = require("../settings/setting.entity");
let UserSettingEntity = class UserSettingEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserSettingEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserSettingEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => setting_entity_1.SettingEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_CONFIGURATION', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserSettingEntity.prototype, "settingId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'VALUE', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], UserSettingEntity.prototype, "value", void 0);
UserSettingEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_211_user_configurations',
        timestamps: false,
    })
], UserSettingEntity);
exports.UserSettingEntity = UserSettingEntity;
//# sourceMappingURL=user-setting.entity.js.map