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
exports.AilmentsService = void 0;
const common_1 = require("@nestjs/common");
const ailments_repository_service_1 = require("./ailments-repository.service");
let AilmentsService = class AilmentsService {
    async viewAll(filters) {
        const data = await this.ailmentRepository.getAll(filters);
        return data.map((i) => i.get({ plain: true }));
    }
    async viewById(id) {
        const data = await this.ailmentRepository.getById(id);
        if (!data) {
            throw new common_1.NotFoundException('Padecimiento no encontrado');
        }
        return data.get({ plain: true });
    }
};
__decorate([
    (0, common_1.Inject)(ailments_repository_service_1.AilmentsRepositoryService),
    __metadata("design:type", ailments_repository_service_1.AilmentsRepositoryService)
], AilmentsService.prototype, "ailmentRepository", void 0);
AilmentsService = __decorate([
    (0, common_1.Injectable)()
], AilmentsService);
exports.AilmentsService = AilmentsService;
//# sourceMappingURL=ailments.service.js.map