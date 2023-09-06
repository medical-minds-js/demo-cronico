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
exports.DeliveryTimesRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let DeliveryTimesRepositoryService = class DeliveryTimesRepositoryService {
    constructor(deliveryTimesRepository) {
        this.deliveryTimesRepository = deliveryTimesRepository;
    }
    async save(data) {
        return await this.deliveryTimesRepository.create({
            startTime: data.startTime,
            endTime: data.endTime,
            status: 0,
        });
    }
    async update(id, data) {
        return await this.deliveryTimesRepository.update({
            id: data.id,
            startTime: data.startTime,
            endTime: data.endTime,
            status: data.status,
        }, { where: { id: [id] } });
    }
    async updateStatus(id) {
        return await this.deliveryTimesRepository.update({
            status: 0,
        }, { where: { addressId: [id] } });
    }
    async findOneById(id) {
        return await this.deliveryTimesRepository.findOne({
            where: { id: [id] },
        });
    }
    async getList() {
        return await this.deliveryTimesRepository.findAll();
    }
    async delete(id) {
        return await this.deliveryTimesRepository.destroy({
            where: { id: [id] },
        });
    }
};
DeliveryTimesRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.DELIVERY_TIME_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], DeliveryTimesRepositoryService);
exports.DeliveryTimesRepositoryService = DeliveryTimesRepositoryService;
//# sourceMappingURL=deliveries-times-repository.service.js.map