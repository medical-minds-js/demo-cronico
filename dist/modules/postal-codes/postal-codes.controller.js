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
exports.PostalCodesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const postal_codes_service_1 = require("./postal-codes.service");
const success_list_response_1 = require("../../core/clases/success-list.response");
let PostalCodesController = class PostalCodesController {
    async getActivePostalCodes(params) {
        const data = await this.cpService.getAll(params.code, params.codeType);
        if (data.length > 0) {
            return new success_list_response_1.SuccessListResponse(data);
        }
        return new success_list_response_1.SuccessListResponse([]);
    }
};
__decorate([
    (0, common_1.Inject)(postal_codes_service_1.PostalCodesService),
    __metadata("design:type", postal_codes_service_1.PostalCodesService)
], PostalCodesController.prototype, "cpService", void 0);
__decorate([
    (0, common_1.Get)('list/:code/:codeType'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostalCodesController.prototype, "getActivePostalCodes", null);
PostalCodesController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/postal-codes')
], PostalCodesController);
exports.PostalCodesController = PostalCodesController;
//# sourceMappingURL=postal-codes.controller.js.map