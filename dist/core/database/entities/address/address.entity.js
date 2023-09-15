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
exports.AddressEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const deliveries_times_entity_1 = require("../deliveries-times/deliveries-times.entity");
const address_deliveries_times_entity_1 = require("../address-deliveries-times/address-deliveries-times.entity");
let AddressEntity = class AddressEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ field: 'ID_USER', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "street", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STREET_NUMBER', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "streetNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'INTERIOR_NUMBER', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "interiorNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SUBURB', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "suburb", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CP', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "cp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LOCATION', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'COMMENTS', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "comments", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'REFERENCE', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "reference", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PHONE_CONTACT', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "phoneContact", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME_CONTACT', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AddressEntity.prototype, "nameContact", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATUS', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "cretedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    (0, sequelize_typescript_1.Column)({ field: 'DELETE_AT', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => deliveries_times_entity_1.DeliveryTimeEntity, {
        through: { model: () => address_deliveries_times_entity_1.AddressDeliveryTimeEntity },
        foreignKey: 'addressId',
    }),
    __metadata("design:type", Array)
], AddressEntity.prototype, "deliveryTimes", void 0);
AddressEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_202_address',
        updatedAt: false,
        paranoid: true,
    })
], AddressEntity);
exports.AddressEntity = AddressEntity;
//# sourceMappingURL=address.entity.js.map