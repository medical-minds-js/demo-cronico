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
exports.ShoppingStatusEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const shopping_entity_1 = require("../shopping/shopping.entity");
let ShoppingStatusEntity = class ShoppingStatusEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER({ length: 11 }) }),
    __metadata("design:type", Number)
], ShoppingStatusEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NAME', type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], ShoppingStatusEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => shopping_entity_1.ShoppingEntity),
    __metadata("design:type", Array)
], ShoppingStatusEntity.prototype, "shoppings", void 0);
ShoppingStatusEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_004_shopping_status',
        timestamps: false,
    })
], ShoppingStatusEntity);
exports.ShoppingStatusEntity = ShoppingStatusEntity;
//# sourceMappingURL=shopping-status.entity.js.map