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
exports.MembershipsEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let MembershipsEntity = class MembershipsEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'MEMBERSHIPS_TYPE',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "membershipsType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING({ length: 255 }) }),
    __metadata("design:type", String)
], MembershipsEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PERIOD', type: sequelize_typescript_1.DataType.STRING({ length: 50 }) }),
    __metadata("design:type", String)
], MembershipsEntity.prototype, "periodo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DAYS', type: sequelize_typescript_1.DataType.INTEGER({ length: 5 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "days", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BENEFIES', type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MembershipsEntity.prototype, "benefies", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'COST', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "cost", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TOTALS', type: sequelize_typescript_1.DataType.INTEGER({ length: 6 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "totals", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DELIVERED', type: sequelize_typescript_1.DataType.INTEGER({ length: 6 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "delivered", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FREE_DAYS', type: sequelize_typescript_1.DataType.INTEGER({ length: 6 }) }),
    __metadata("design:type", Number)
], MembershipsEntity.prototype, "freeDays", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get: function () {
            const data = this.getDataValue('benefies');
            if (data) {
                return data
                    .replace(new RegExp('<li>', 'g'), '')
                    .replace(new RegExp('\n', 'g'), '')
                    .split('</li>')
                    .filter((i) => i)
                    .map((i) => i.trim());
            }
            return [];
        },
    }),
    __metadata("design:type", Array)
], MembershipsEntity.prototype, "listBenefies", void 0);
MembershipsEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_011_memberships',
        updatedAt: false,
        createdAt: false,
    })
], MembershipsEntity);
exports.MembershipsEntity = MembershipsEntity;
//# sourceMappingURL=memberships-entity.js.map