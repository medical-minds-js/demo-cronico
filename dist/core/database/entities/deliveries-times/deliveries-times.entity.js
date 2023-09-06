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
exports.DeliveryTimeEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const address_entity_1 = require("../address/address.entity");
const address_deliveries_times_entity_1 = require("../address-deliveries-times/address-deliveries-times.entity");
let DeliveryTimeEntity = class DeliveryTimeEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DeliveryTimeEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], DeliveryTimeEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'START_TIME',
        type: sequelize_typescript_1.DataType.TIME,
    }),
    __metadata("design:type", Date)
], DeliveryTimeEntity.prototype, "startTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'END_TIME',
        type: sequelize_typescript_1.DataType.TIME,
    }),
    __metadata("design:type", Date)
], DeliveryTimeEntity.prototype, "endTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ACTIVE',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], DeliveryTimeEntity.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => address_entity_1.AddressEntity, {
        through: { model: () => address_deliveries_times_entity_1.AddressDeliveryTimeEntity },
        foreignKey: 'deliveryTimeId',
    }),
    __metadata("design:type", Array)
], DeliveryTimeEntity.prototype, "address", void 0);
DeliveryTimeEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_006_delivery_times',
        timestamps: false,
    })
], DeliveryTimeEntity);
exports.DeliveryTimeEntity = DeliveryTimeEntity;
//# sourceMappingURL=deliveries-times.entity.js.map