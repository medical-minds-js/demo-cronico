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
exports.NewsMediaEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let NewsMediaEntity = class NewsMediaEntity extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ field: 'ID', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], NewsMediaEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_NEWS',
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], NewsMediaEntity.prototype, "newsId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ID_TYPE_MEDIA',
    }),
    __metadata("design:type", Number)
], NewsMediaEntity.prototype, "typeMediaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SOURCE', type: sequelize_typescript_1.DataType.STRING(200) }),
    __metadata("design:type", String)
], NewsMediaEntity.prototype, "source", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'CREATED_AT' }),
    __metadata("design:type", Date)
], NewsMediaEntity.prototype, "createdAt", void 0);
NewsMediaEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'app_t_106_news_media',
        updatedAt: false,
        createdAt: true,
    })
], NewsMediaEntity);
exports.NewsMediaEntity = NewsMediaEntity;
//# sourceMappingURL=news-media.entity.js.map