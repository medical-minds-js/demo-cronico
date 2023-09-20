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
exports.SettingEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const user_setting_entity_1 = require("../user-setting/user-setting.entity");
let SettingEntity = class SettingEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], SettingEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CODE', type: sequelize_typescript_1.DataType.STRING(100) }),
    __metadata("design:type", String)
], SettingEntity.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_entity_1.UserEntity, {
        through: { model: () => user_setting_entity_1.UserSettingEntity },
        foreignKey: 'settingId',
    }),
    __metadata("design:type", Array)
], SettingEntity.prototype, "users", void 0);
SettingEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_008_configurations',
        timestamps: false,
    })
], SettingEntity);
exports.SettingEntity = SettingEntity;
//# sourceMappingURL=setting.entity.js.map