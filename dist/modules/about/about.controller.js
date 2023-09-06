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
exports.AboutController = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const success_response_1 = require("../../core/clases/success.response");
let AboutController = class AboutController {
    async getMainProduct() {
        const data = await this.aboutService.getAboutUs();
        return new success_response_1.SuccessResponse(data);
    }
};
__decorate([
    (0, common_1.Inject)(about_service_1.AboutService),
    __metadata("design:type", about_service_1.AboutService)
], AboutController.prototype, "aboutService", void 0);
__decorate([
    (0, common_1.Get)('about-us'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "getMainProduct", null);
AboutController = __decorate([
    (0, common_1.Controller)('api/v1/about')
], AboutController);
exports.AboutController = AboutController;
//# sourceMappingURL=about.controller.js.map