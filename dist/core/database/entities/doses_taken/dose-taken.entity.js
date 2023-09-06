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
exports.DoseTakenEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const subscription_product_entity_1 = require("../subscription-products/subscription-product.entity");
let DoseTakenEntity = class DoseTakenEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_product_entity_1.SubscriptionProductEntity),
    (0, sequelize_typescript_1.Column)({
        field: 'ID_SUBSCRIPTION_PRODUCT',
        type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }),
    }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "subscriptionProductId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DOSE_DATE', type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], DoseTakenEntity.prototype, "doseDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'STATUS', type: sequelize_typescript_1.DataType.INTEGER({ length: 1 }) }),
    __metadata("design:type", Number)
], DoseTakenEntity.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            this.getDataValue('status') === 1 ? 'Tomada' : 'No tomada';
        },
    }),
    __metadata("design:type", String)
], DoseTakenEntity.prototype, "statusName", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subscription_product_entity_1.SubscriptionProductEntity),
    __metadata("design:type", subscription_product_entity_1.SubscriptionProductEntity)
], DoseTakenEntity.prototype, "userAilmentsProduct", void 0);
DoseTakenEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_300_doses_taken',
        timestamps: false,
    })
], DoseTakenEntity);
exports.DoseTakenEntity = DoseTakenEntity;
//# sourceMappingURL=dose-taken.entity.js.map