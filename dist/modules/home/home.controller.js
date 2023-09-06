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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("../products/products.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
const success_response_1 = require("../../core/clases/success.response");
const home_service_1 = require("./home.service");
const supply_request_entity_1 = require("../../core/database/entities/supply-requests/supply-request.entity");
let HomeController = class HomeController {
    async getMainProduct() {
        const data = await this.productsService.getHomePrincipalProduct();
        return new success_response_1.SuccessResponse(data);
    }
    async getMainPackage() {
        const data = await this.productsService.getHomePrincipalPackage();
        return new success_response_1.SuccessResponse(data);
    }
    async getNewProducts() {
        const data = await this.productsService.getNewProducts();
        return new success_list_response_1.SuccessListResponse(data);
    }
    async getHomeVideo() {
        const data = await this.homeService.getHomeVideo();
        return new success_response_1.SuccessResponse(data);
    }
    async getAboutUs() {
        const data = await this.homeService.getAboutUs();
        return new success_response_1.SuccessResponse(data);
    }
    async getBenefits() {
        const data = await this.homeService.getBenefits();
        return new success_list_response_1.SuccessListResponse(data);
    }
    async getSocialCause() {
        const data = await this.homeService.getSocialCause();
        return new success_response_1.SuccessResponse(data);
    }
    async getTestimonials() {
        const data = await this.homeService.getTestimonials();
        return new success_list_response_1.SuccessListResponse(data);
    }
    async createRequestSupply(data) {
        const result = await this.homeService.createRequestSupply(data);
        return new success_response_1.SuccessResponse(result);
    }
};
__decorate([
    (0, common_1.Inject)(products_service_1.ProductsService),
    __metadata("design:type", products_service_1.ProductsService)
], HomeController.prototype, "productsService", void 0);
__decorate([
    (0, common_1.Inject)(home_service_1.HomeService),
    __metadata("design:type", home_service_1.HomeService)
], HomeController.prototype, "homeService", void 0);
__decorate([
    (0, common_1.Get)('main-product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getMainProduct", null);
__decorate([
    (0, common_1.Get)('main-package'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getMainPackage", null);
__decorate([
    (0, common_1.Get)('new-products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getNewProducts", null);
__decorate([
    (0, common_1.Get)('video'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getHomeVideo", null);
__decorate([
    (0, common_1.Get)('about-us'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getAboutUs", null);
__decorate([
    (0, common_1.Get)('benefits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getBenefits", null);
__decorate([
    (0, common_1.Get)('social-cause'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getSocialCause", null);
__decorate([
    (0, common_1.Get)('testimonials'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getTestimonials", null);
__decorate([
    (0, common_1.Post)('request-supply'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supply_request_entity_1.SupplyRequestEntity]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "createRequestSupply", null);
HomeController = __decorate([
    (0, common_1.Controller)('api/v1/home')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map