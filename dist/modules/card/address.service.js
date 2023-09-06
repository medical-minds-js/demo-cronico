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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_repository_service_1 = require("./address-repository.service");
const deliveries_times_repository_service_1 = require("../deliveries-times/deliveries-times-repository.service");
const deliveries_times_entity_1 = require("../../core/database/entities/deliveries-times/deliveries-times.entity");
let AddressService = class AddressService {
    async findByUserId(userId) {
        const data = await this.addressRepository.findAddressByUserId(userId);
        return data.map((item) => {
            const rest = __rest(item.get({ plain: true }), []);
            return rest;
        });
    }
    async save(address) {
        const data = await this.addressRepository.save(address);
        const newAddress = data.get({
            plain: true,
        });
        const delivery1 = new deliveries_times_entity_1.DeliveryTimeEntity({
            addressId: newAddress.id,
            startTime: '08:00:00',
            endTime: '12:00:00',
        });
        const delivery2 = new deliveries_times_entity_1.DeliveryTimeEntity({
            addressId: newAddress.id,
            startTime: '14:00:00',
            endTime: '16:00:00',
        });
        const delivery3 = new deliveries_times_entity_1.DeliveryTimeEntity({
            addressId: newAddress.id,
            startTime: '16:00:00',
            endTime: '20:00:00',
        });
        await this.deliveriesTimesRepository.save(delivery1);
        await this.deliveriesTimesRepository.save(delivery2);
        await this.deliveriesTimesRepository.save(delivery3);
        return newAddress;
    }
    async delete(id) {
        const cartFinded = await this.addressRepository.findOneById(id);
        if (cartFinded == null) {
            return -1;
        }
        return await this.addressRepository.delete(id);
    }
    async updateAddress(id, address) {
        const cartFinded = await this.addressRepository.findOneById(id);
        if (cartFinded == null) {
            return [-1];
        }
        if (address.status == 1) {
            const list = await this.addressRepository.updatePriorityAdrress(address.userId);
        }
        const data = await this.addressRepository.update(id, address);
        return data;
    }
};
__decorate([
    (0, common_1.Inject)(address_repository_service_1.AddressRepositoryService),
    __metadata("design:type", address_repository_service_1.AddressRepositoryService)
], AddressService.prototype, "addressRepository", void 0);
__decorate([
    (0, common_1.Inject)(deliveries_times_repository_service_1.DeliveriesTimesRepositoryService),
    __metadata("design:type", deliveries_times_repository_service_1.DeliveriesTimesRepositoryService)
], AddressService.prototype, "deliveriesTimesRepository", void 0);
AddressService = __decorate([
    (0, common_1.Injectable)()
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map