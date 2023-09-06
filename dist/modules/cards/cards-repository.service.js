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
exports.CardsRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let CardsRepositoryService = class CardsRepositoryService {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async findCardsByUser(userId) {
        return this.cardsRepository.findAll({
            where: { userId: userId },
        });
    }
    async findActiveCardsByUser(userId) {
        return this.cardsRepository.findOne({
            where: { userId: userId, active: 1 },
        });
    }
    async saveCardByUser(data) {
        return this.cardsRepository.create(data);
    }
    async disableAllCardsByUser(userId) {
        return this.cardsRepository.update({ active: 0 }, { where: { userId: userId } });
    }
    async setDefaultCardByUser(id) {
        return this.cardsRepository.update({ active: 1 }, { where: { id } });
    }
};
CardsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CARD_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CardsRepositoryService);
exports.CardsRepositoryService = CardsRepositoryService;
//# sourceMappingURL=cards-repository.service.js.map