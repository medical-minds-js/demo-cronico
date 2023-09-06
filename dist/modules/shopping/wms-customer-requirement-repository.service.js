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
exports.WmsCustomerRequirementRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let WmsCustomerRequirementRepositoryService = class WmsCustomerRequirementRepositoryService {
    constructor(customerRequirementRepository, customerRequirementDetailRepository) {
        this.customerRequirementRepository = customerRequirementRepository;
        this.customerRequirementDetailRepository = customerRequirementDetailRepository;
    }
    async saveOrder(customerId, products) {
        try {
            const requirement = await this.customerRequirementRepository.create({
                customerId,
                requiredDate: new Date(),
                remissionsStatus: 1,
                priority: 1,
                creationDate: new Date(),
                type: 1,
            });
            const details = products.map((product) => (Object.assign(Object.assign({}, product), { customerRequirementId: requirement.customerRequirementId, status: 0, remissionStatus: 0 })));
            await this.customerRequirementDetailRepository.bulkCreate(details);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
WmsCustomerRequirementRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS)),
    __param(1, (0, common_1.Inject)(constants_1.WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS)),
    __metadata("design:paramtypes", [Object, Object])
], WmsCustomerRequirementRepositoryService);
exports.WmsCustomerRequirementRepositoryService = WmsCustomerRequirementRepositoryService;
//# sourceMappingURL=wms-customer-requirement-repository.service.js.map