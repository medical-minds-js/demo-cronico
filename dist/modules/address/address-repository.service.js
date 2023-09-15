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
exports.AddressRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const address_deliveries_times_entity_1 = require("../../core/database/entities/address-deliveries-times/address-deliveries-times.entity");
const deliveries_times_entity_1 = require("../../core/database/entities/deliveries-times/deliveries-times.entity");
let AddressRepositoryService = class AddressRepositoryService {
    constructor(addressRepository, adressDeliveryTimeRepository, deliveryTimeRepository) {
        this.addressRepository = addressRepository;
        this.adressDeliveryTimeRepository = adressDeliveryTimeRepository;
        this.deliveryTimeRepository = deliveryTimeRepository;
    }
    async findAddressByUserId(userId) {
        const data = await this.addressRepository.findAll({
            where: { userId: [userId] },
        });
        return data.map((item) => item.get({ plain: true }));
    }
    async findDelieryTimesByAddress(adressIds) {
        let delieries = await this.deliveryTimeRepository.findAll();
        delieries = delieries.map((item) => item.get({ plain: true }));
        const data = await this.adressDeliveryTimeRepository.findAll({
            where: { addressId: adressIds },
        });
        return data.map((item) => {
            const found = delieries.find((delivery) => delivery.id == item.deliveryTimeId);
            return Object.assign(Object.assign({}, item.get({ plain: true })), { deliveryTime: found });
        });
    }
    async findActiveAddressByUserId(userId) {
        return this.addressRepository.findOne({
            where: { userId: [userId], status: [1] },
            include: [deliveries_times_entity_1.DeliveryTimeEntity],
        });
    }
    async save(address) {
        return await this.addressRepository.create({
            id: address.id,
            userId: address.userId,
            name: address.name,
            street: address.street,
            streetNumber: address.streetNumber,
            interiorNumber: address.interiorNumber,
            suburb: address.suburb,
            cp: address.cp,
            location: address.location,
            comments: address.comments,
            state: address.state,
            reference: address.reference,
            phoneContact: address.phoneContact,
            nameContact: address.nameContact,
            status: address.status,
        });
    }
    async delete(id) {
        return await this.addressRepository.destroy({
            where: { id: [id] },
        });
    }
    async findOneById(id) {
        return await this.addressRepository.findOne({
            where: { id: [id] },
            include: [deliveries_times_entity_1.DeliveryTimeEntity],
        });
    }
    async update(id, address) {
        return await this.addressRepository.update({
            id: address.id,
            userId: address.userId,
            deliveryTimes: address.deliveryTimes,
            name: address.name,
            street: address.street,
            streetNumber: address.streetNumber,
            suburb: address.suburb,
            cp: address.cp,
            location: address.location,
            comments: address.comments,
            state: address.state,
            reference: address.reference,
            phoneContact: address.phoneContact,
            nameContact: address.nameContact,
            status: address.status,
        }, { where: { id: [id] } });
    }
    async cancelPriorityAddress(userId) {
        return await this.addressRepository.update({ status: 0 }, { where: { userId: [userId] } });
    }
    async setActiveAdrress(id) {
        return await this.addressRepository.update({ status: 1 }, { where: { id } });
    }
    async updateDelieryTimes(addressId, deliveryTimes) {
        await this.deleteDeliveryTimes(addressId);
        const data = deliveryTimes.map((item) => ({
            addressId,
            deliveryTimeId: item.id,
        }));
        await address_deliveries_times_entity_1.AddressDeliveryTimeEntity.bulkCreate(data);
    }
    async deleteDeliveryTimes(addressId) {
        await address_deliveries_times_entity_1.AddressDeliveryTimeEntity.destroy({ where: { addressId } });
    }
};
AddressRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ADDRESS_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.ADDRESS_DELIVERIES_TIME_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.DELIVERY_TIME_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], AddressRepositoryService);
exports.AddressRepositoryService = AddressRepositoryService;
//# sourceMappingURL=address-repository.service.js.map