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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_service_1 = require("./products-repository.service");
let ProductsService = class ProductsService {
    async getHomePrincipalProduct() {
        return this.productRepository.viewOneById(1);
    }
    async getNewProducts() {
        return this.productRepository.findLastProducts();
    }
    async getHomePrincipalPackage() {
        return this.productRepository.viewOneById(3);
    }
    async getProducts(filters) {
        const total = await this.productRepository.countSearchByText(filters.name);
        if (total === 0) {
            return {
                items: [],
                total: 0,
            };
        }
        const ids = await this.productRepository.searchByText(filters.name, filters.page, filters.itemsPerPage);
        const productIds = ids.filter((i) => i.type === 1);
        const ailmentsIds = ids.filter((i) => i.type === 2);
        let products = [];
        let ailments = [];
        if (productIds.length > 0) {
            products = await this.viewProductByIds(productIds.map((i) => i.id));
        }
        if (ailmentsIds.length > 0) {
            ailments = await this.productRepository.viewAilmentsByIdList(ailmentsIds.map((i) => i.id));
        }
        const items = ids.map((search) => {
            if (search.type === 1) {
                return {
                    type: search.type,
                    product: products.find((i) => i.id === search.id),
                    ailments: null,
                };
            }
            return {
                type: search.type,
                ailments: ailments.find((i) => i.id === search.id),
                product: null,
            };
        });
        return { items, total };
    }
    async getProductById(id) {
        const data = await this.productRepository.findOneById(id);
        const product = data.get({ plain: true });
        if (product.productType == 2) {
            if (product.productParts.length === 0) {
                return product;
            }
            const parts = await this.productRepository.viewPartProductsByIds(product.productParts.map((part) => part.productPartId));
            return Object.assign(Object.assign({}, product), { productParts: parts });
        }
        return product;
    }
    async viewProductByIds(ids) {
        const products = await this.productRepository.viewProductsByIds(ids);
        const allIds = [];
        products
            .filter((item) => item.productType === 2)
            .forEach((i) => i.productParts.map((i) => allIds.push(i.productPartId)));
        const partsIds = allIds.filter((item, index) => allIds.indexOf(item) === index);
        const parts = await this.productRepository.viewPartProductsByIds(partsIds);
        return products.map((item) => {
            if (item.productType === 2) {
                const products = item.productParts.map((part) => parts.find((product) => product.id === part.productPartId));
                return Object.assign(Object.assign({}, item), { products });
            }
            return item;
        });
    }
    async viewImagesByIds(ids) {
        const images = await this.productRepository.getImagesByIds(ids);
        return images.map((i) => i.get({ plain: true }));
    }
};
__decorate([
    (0, common_1.Inject)(products_repository_service_1.ProductsRepositoryService),
    __metadata("design:type", products_repository_service_1.ProductsRepositoryService)
], ProductsService.prototype, "productRepository", void 0);
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map