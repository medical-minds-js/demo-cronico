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
exports.DeliveriesTimesService = void 0;
const common_1 = require("@nestjs/common");
const deliveries_times_repository_service_1 = require("./deliveries-times-repository.service");
let DeliveriesTimesService = class DeliveriesTimesService {
    async getDeliveriesTimesList() {
        const data = await this.deliveriesTimesRepository.getList();
        return data.map((item) => {
            const rest = __rest(item.get({ plain: true }), []);
            return rest;
        });
    }
    async save(delivery) {
        const data = await this.deliveriesTimesRepository.save(delivery);
        return data.get({ plain: true });
    }
    async delete(id) {
        const deliveryFinded = await this.deliveriesTimesRepository.findOneById(id);
        if (deliveryFinded == null) {
            return -1;
        }
        return await this.deliveriesTimesRepository.delete(id);
    }
    async updateDeliveryTime(id, delivery) {
        const deliveryFinded = await this.deliveriesTimesRepository.findOneById(id);
        if (deliveryFinded == null) {
            return [-1];
        }
        if (delivery.status == 1) {
        }
        const data = await this.deliveriesTimesRepository.update(id, delivery);
        return data;
    }
};
__decorate([
    (0, common_1.Inject)(deliveries_times_repository_service_1.DeliveryTimesRepositoryService),
    __metadata("design:type", deliveries_times_repository_service_1.DeliveryTimesRepositoryService)
], DeliveriesTimesService.prototype, "deliveriesTimesRepository", void 0);
DeliveriesTimesService = __decorate([
    (0, common_1.Injectable)()
], DeliveriesTimesService);
exports.DeliveriesTimesService = DeliveriesTimesService;
//# sourceMappingURL=deliveries-times.service.js.map