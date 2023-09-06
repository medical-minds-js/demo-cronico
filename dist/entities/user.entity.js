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
let UserEntity = class UserEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserEntity.prototype, "surname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'second_surname',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "secondSurname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'user_name',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserEntity.prototype, "pass", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'created_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
UserEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'map_t_101_users',
        updatedAt: false,
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map