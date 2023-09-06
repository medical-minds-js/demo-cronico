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
exports.PostalCodesRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let PostalCodesRepositoryService = class PostalCodesRepositoryService {
    constructor(postalCodeRepository) {
        this.postalCodeRepository = postalCodeRepository;
    }
    async listAll(code) {
        return await this.postalCodeRepository.findAll({
            where: { isActive: 1, postalCode: code },
        });
    }
};
PostalCodesRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.POSTAL_CODES_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], PostalCodesRepositoryService);
exports.PostalCodesRepositoryService = PostalCodesRepositoryService;
//# sourceMappingURL=postal-codes-repository.service.js.map