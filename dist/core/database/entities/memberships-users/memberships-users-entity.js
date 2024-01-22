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
exports.MembershipsUsersEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const memberships_entity_1 = require("../memberships/memberships-entity");
let MembershipsUsersEntity = class MembershipsUsersEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], MembershipsUsersEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => memberships_entity_1.MembershipsEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_MEMBERHSIPS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], MembershipsUsersEntity.prototype, "membershipsId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], MembershipsUsersEntity.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], MembershipsUsersEntity.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EXPIRATION_DATE', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Number)
], MembershipsUsersEntity.prototype, "expirationDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATUS', type: sequelize_typescript_1.DataType.INTEGER({ length: 1 }) }),
    __metadata("design:type", Number)
], MembershipsUsersEntity.prototype, "status", void 0);
MembershipsUsersEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_112_memberships_users',
        createdAt: true,
        updatedAt: false,
    })
], MembershipsUsersEntity);
exports.MembershipsUsersEntity = MembershipsUsersEntity;
//# sourceMappingURL=memberships-users-entity.js.map