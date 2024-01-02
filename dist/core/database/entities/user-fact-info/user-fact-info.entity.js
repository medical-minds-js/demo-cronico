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
exports.UserFactInfoEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
let UserFactInfoEntity = class UserFactInfoEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserFactInfoEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], UserFactInfoEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FISCAL_NAME', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "fiscalName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'RFC', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "rfc", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CP', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserFactInfoEntity.prototype, "cp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LOCATION', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "street", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBURB', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "suburb", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET_NUMBER', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "streetNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INTERIOR_NUMBER', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], UserFactInfoEntity.prototype, "interiorNumber", void 0);
UserFactInfoEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_215_user_fact_info',
        timestamps: false,
    })
], UserFactInfoEntity);
exports.UserFactInfoEntity = UserFactInfoEntity;
//# sourceMappingURL=user-fact-info.entity.js.map