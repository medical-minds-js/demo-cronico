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
exports.WmsCustomerRequirementDetailEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let WmsCustomerRequirementDetailEntity = class WmsCustomerRequirementDetailEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        field: 'ID_CUSTOMER_REQUIREMENT',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "customerRequirementId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ID_CUSTOMER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "customerId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'REQUIRED_DATE', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], WmsCustomerRequirementDetailEntity.prototype, "requiredDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_REMISSIONS_STATUS',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "remissionsStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FOLIO', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "folio", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PRIORITY', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CREATION_DATE', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], WmsCustomerRequirementDetailEntity.prototype, "creationDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TYPE', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], WmsCustomerRequirementDetailEntity.prototype, "userName", void 0);
WmsCustomerRequirementDetailEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'map_t_151_customer_requirement',
        updatedAt: false,
    })
], WmsCustomerRequirementDetailEntity);
exports.WmsCustomerRequirementDetailEntity = WmsCustomerRequirementDetailEntity;
//# sourceMappingURL=wms-customer-requirement.entity.js.map