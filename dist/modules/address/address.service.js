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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_repository_service_1 = require("./address-repository.service");
const deliveries_times_repository_service_1 = require("../deliveries-times/deliveries-times-repository.service");
let AddressService = class AddressService {
    async findByUserId(userId) {
        const data = await this.addressRepository.findAddressByUserId(userId);
        const deliveries = await this.addressRepository.findDelieryTimesByAddress(data.map((item) => item.id));
        return data.map((item) => (Object.assign(Object.assign({}, item), { deliveryTimes: deliveries
                .filter((delivery) => item.id === delivery.addressId)
                .map((item) => item.deliveryTime) })));
    }
    async findActiveByUserId(userId) {
        return this.addressRepository.findActiveAddressByUserId(userId);
    }
    async save(address) {
        const data = await this.addressRepository.save(address);
        if (address.deliveryTimes != undefined) {
            await this.addressRepository.updateDelieryTimes(data.id, address.deliveryTimes);
        }
        return data.get({
            plain: true,
        });
    }
    async delete(id) {
        const addressFinded = await this.addressRepository.findOneById(id);
        if (!addressFinded) {
            throw new common_1.NotFoundException('Salida');
        }
        await this.addressRepository.deleteDeliveryTimes(addressFinded.id);
        return await this.addressRepository.delete(id);
    }
    async updateAddress(id, address) {
        const cartFinded = await this.addressRepository.findOneById(id);
        if (!cartFinded == null) {
            throw new common_1.NotFoundException('Direccion no encontrada');
        }
        if (address.status == 1) {
            await this.addressRepository.cancelPriorityAddress(address.userId);
        }
        const data = await this.addressRepository.update(id, address);
        await this.addressRepository.updateDelieryTimes(id, address.deliveryTimes);
        return data;
    }
    async setDefaultByUser(userId, id) {
        await this.addressRepository.cancelPriorityAddress(userId);
        await this.addressRepository.setActiveAdrress(id);
    }
};
__decorate([
    (0, common_1.Inject)(address_repository_service_1.AddressRepositoryService),
    __metadata("design:type", address_repository_service_1.AddressRepositoryService)
], AddressService.prototype, "addressRepository", void 0);
__decorate([
    (0, common_1.Inject)(deliveries_times_repository_service_1.DeliveryTimesRepositoryService),
    __metadata("design:type", deliveries_times_repository_service_1.DeliveryTimesRepositoryService)
], AddressService.prototype, "deliveriesTimesRepository", void 0);
AddressService = __decorate([
    (0, common_1.Injectable)()
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map