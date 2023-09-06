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
exports.AilmentsRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const ailment_images_entity_1 = require("../../core/database/entities/ailments-images/ailment-images.entity");
const sequelize_1 = require("sequelize");
let AilmentsRepositoryService = class AilmentsRepositoryService {
    constructor(ailmentRepository) {
        this.ailmentRepository = ailmentRepository;
    }
    async getAll(data) {
        if (data.name) {
            return this.ailmentRepository.findAll({
                where: { name: { [sequelize_1.Op.like]: `%${data.name}%` } },
                include: [ailment_images_entity_1.AilmentsImageEntity],
            });
        }
        return this.ailmentRepository.findAll({
            include: [ailment_images_entity_1.AilmentsImageEntity],
        });
    }
    async getById(id) {
        return this.ailmentRepository.findOne({
            where: { id: id },
            include: [ailment_images_entity_1.AilmentsImageEntity],
        });
    }
};
AilmentsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.AILMENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AilmentsRepositoryService);
exports.AilmentsRepositoryService = AilmentsRepositoryService;
//# sourceMappingURL=ailments-repository.service.js.map