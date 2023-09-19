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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const constants_1 = require("../../core/constants");
const ailment_entity_1 = require("../../core/database/entities/ailments/ailment.entity");
const product_images_entity_1 = require("../../core/database/entities/product-images/product-images.entity");
const product_parts_entity_1 = require("../../core/database/entities/product-parts/product-parts.entity");
const product_entity_1 = require("../../core/database/entities/product/product.entity");
const sale_entity_1 = require("../../core/database/entities/sales/sale.entity");
const supply_entity_1 = require("../../core/database/entities/supplies/supply.entity");
const ailment_images_entity_1 = require("../../core/database/entities/ailments-images/ailment-images.entity");
const product_ailments_entity_1 = require("../../core/database/entities/product-ailments/product-ailments.entity");
let ProductsRepositoryService = class ProductsRepositoryService {
    constructor(productRepository, ailmentRepository, productImageRepository, conn) {
        this.productRepository = productRepository;
        this.ailmentRepository = ailmentRepository;
        this.productImageRepository = productImageRepository;
        this.conn = conn;
    }
    async searchByText(text, page = 0, itemsPerPage = 0) {
        let query = `Select * from (${this.generateQuerySearchByText(text)}) t`;
        if (page && itemsPerPage) {
            const offset = (page - 1) * itemsPerPage;
            query += ` LIMIT ${offset}, ${itemsPerPage}`;
        }
        return this.conn.query(query, {
            plain: false,
            type: sequelize_1.QueryTypes.SELECT,
        });
    }
    generateQuerySearchByText(text) {
        let whereP = '';
        let whereA = '';
        if (text) {
            whereP = `WHERE p.NAME LIKE '%${text}%' OR p.DESCRIPTION LIKE '%${text}%'`;
            whereA = `WHERE a.NAME LIKE '%${text}%' OR a.DESCRIPTION LIKE '%${text}%'`;
        }
        return `SELECT
	a.ID id,
  2 type
  FROM  app_t_109_ailments a ${whereA}
UNION ALL
  SELECT
	p.ID id,
  1 type
  FROM 	app_t_107_products p ${whereP}`;
    }
    async countSearchByText(text) {
        const query = `Select COUNT(t.id) total from (
      ${this.generateQuerySearchByText(text)}) t`;
        const counts = await this.conn.query(query, {
            plain: false,
            type: sequelize_1.QueryTypes.SELECT,
        });
        return counts[0].total;
    }
    async viewAilmentsByIdList(ailmentsIds) {
        const data = await this.ailmentRepository.findAll({
            include: [
                ailment_images_entity_1.AilmentsImageEntity,
                product_ailments_entity_1.ProductAilmentsEntity,
                { model: product_entity_1.ProductEntity, include: [product_images_entity_1.ProductImageEntity] },
            ],
            where: { id: { [sequelize_1.Op.in]: ailmentsIds } },
        });
        return data.map((i) => i.get({ plain: true }));
    }
    async viewProductsByIds(ids) {
        const data = await this.productRepository.findAll({
            where: { id: { [sequelize_1.Op.in]: ids } },
            include: [product_images_entity_1.ProductImageEntity, supply_entity_1.SupplyEntity, product_parts_entity_1.ProductPartEntity],
        });
        return data.map((i) => i.get({ plain: true }));
    }
    async viewPartProductsByIds(ids) {
        const data = await this.productRepository.findAll({
            where: { id: { [sequelize_1.Op.in]: ids } },
            include: [product_images_entity_1.ProductImageEntity, supply_entity_1.SupplyEntity],
        });
        return data.map((i) => i.get({ plain: true }));
    }
    async findOneById(id) {
        return this.productRepository.findOne({
            where: { id: [id] },
            include: [
                sale_entity_1.SaleEntity,
                ailment_entity_1.AilmentEntity,
                product_parts_entity_1.ProductPartEntity,
                product_images_entity_1.ProductImageEntity,
            ],
        });
    }
    async viewOneById(id) {
        const data = await this.productRepository.findOne({
            where: { id: [id] },
            include: [
                sale_entity_1.SaleEntity,
                ailment_entity_1.AilmentEntity,
                product_parts_entity_1.ProductPartEntity,
                product_images_entity_1.ProductImageEntity,
            ],
        });
        if (!data) {
            throw new common_1.NotFoundException();
        }
        if (data.productType === 1) {
            return data.get({ plain: true });
        }
        const product = data.get({ plain: true });
        const ids = product.productParts.map((part) => part.productPartId);
        if (ids.length === 0) {
            return data.get({ plain: true });
        }
        const items = await this.productRepository.findAll({
            where: { id: { [sequelize_1.Op.in]: ids } },
            include: [ailment_entity_1.AilmentEntity, product_images_entity_1.ProductImageEntity],
        });
        return Object.assign(Object.assign({}, product), { productParts: items.map((i) => i.get({ plain: true })) });
    }
    async findNewProducts(date) {
        const startedDate = new Date(date + ' 00:00:00');
        const endDate = new Date(date + ' 11:59:59');
        return await this.productRepository.findAll({
            where: { createdAt: { [sequelize_1.Op.between]: [startedDate, endDate] } },
            include: [sale_entity_1.SaleEntity, ailment_entity_1.AilmentEntity, product_images_entity_1.ProductImageEntity],
            limit: 2,
        });
    }
    async getImagesByIds(ids) {
        return this.productImageRepository.findAll({
            where: { productId: { [sequelize_1.Op.in]: ids } },
        });
    }
};
ProductsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.AILMENT_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.PRODUCT_IMAGES_REPOSITORY)),
    __param(3, (0, common_1.Inject)(constants_1.SEQUELIZE)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_1.Sequelize])
], ProductsRepositoryService);
exports.ProductsRepositoryService = ProductsRepositoryService;
//# sourceMappingURL=products-repository.service.js.map