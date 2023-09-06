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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_service_1 = require("./users-repository.service");
const user_utils_1 = require("./user.utils");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const ailments_service_1 = require("../ailments/ailments.service");
const fail_response_1 = require("../../core/clases/fail.response");
let UsersService = class UsersService {
    async findAll() {
        const items = await this.userRepository.findAll();
        return items.map((item) => {
            return (0, user_utils_1.UserMapper)(item.get({ plain: true }));
        });
    }
    async findOneById(id) {
        const data = await this.userRepository.findOneById(id);
        return (0, user_utils_1.UserMapper)(data.get({ plain: true }));
    }
    async getById(id) {
        return this.userRepository.findOneById(id);
    }
    async findUserByEmail(email) {
        return this.userRepository.findUserByEmail(email);
    }
    async saveRegister(user) {
        const data = await this.userRepository.save(user);
        return (0, user_utils_1.UserMapper)(data.get({ plain: true }));
    }
    async updateRegister(user) {
        const userFinded = await this.userRepository.findOneById(user.id);
        if (!userFinded) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        user.profileId = userFinded.profileId;
        user.pass = userFinded.pass;
        user.salt = userFinded.salt;
        user.enableOpenPay = userFinded.enableOpenPay;
        user.openPayId = userFinded.openPayId;
        user.createdAt = userFinded.createdAt;
        const data = await this.userRepository.update(user);
        if (data[0] === 0) {
            throw new fail_response_1.FailResponse('Error al actualizar');
        }
        return data;
    }
    async activePayment(userId) {
        const user = await this.userRepository.findOneById(userId);
        if (!user.enableOpenPay) {
            const data = {
                name: user.name,
                last_name: user.surname,
                email: user.email,
            };
            const openpay = await this.openPayService.registerCustomer(data);
            await this.userRepository.updateOpenPayId(user.id, openpay.id);
            await user.reload();
        }
        return 'Activado';
    }
    async getPaymentId(userId) {
        const user = await this.userRepository.findOneById(userId);
        return user.openPayId;
    }
    async getUserAilments(userId, filters) {
        const users = await this.userRepository.findAilments(userId);
        let list = [];
        if (users.length === 0) {
            const all = await this.ailmentsService.viewAll(filters);
            list = all.map((ailment) => (Object.assign(Object.assign({}, ailment), { userAilments: null })));
        }
        else if (users.length > 0 && filters.name) {
            const all = await this.ailmentsService.viewAll(filters);
            list = all.map((ailment) => {
                const userAilment = users.find((user) => user.id === ailment.id);
                return userAilment ? userAilment : Object.assign(Object.assign({}, ailment), { userAilments: null });
            });
        }
        else {
            list = users.map((item) => {
                const _a = item.get({ plain: true }), { UserAilmentsEntity } = _a, rest = __rest(_a, ["UserAilmentsEntity"]);
                return Object.assign(Object.assign({}, rest), { userAilments: UserAilmentsEntity });
            });
        }
        return list;
    }
    async addAilments(userId, ailments) {
        const products = await this.userRepository.getProductsAilments(ailments.id);
        const data = {
            userId,
            ailmentsId: ailments.id,
            userAilmentsProducts: products.map((i) => ({
                productId: i.id,
            })),
        };
        return this.userRepository.addAilments(data);
    }
    async getFullUserAilments(id) {
        const data = await this.userRepository.getUserAilments(id);
        const ailments = await this.ailmentsService.viewById(data.ailmentsId);
        return Object.assign(Object.assign({}, data.get({ plain: true })), { ailments });
    }
    async configUserAilmentsProduct(id, data) {
        const found = await this.userRepository.getProductByUserAilments(id);
        if (!found) {
            throw new common_1.NotFoundException('No se encontro el registro');
        }
        await this.userRepository.updateProductByUserAilments(id, data);
    }
    async createDoseTaken(info) {
        const data = { subscriptionProductId: info.id };
        return this.userRepository.createDoseTaken(data);
    }
};
__decorate([
    (0, common_1.Inject)(users_repository_service_1.UsersRepositoryService),
    __metadata("design:type", users_repository_service_1.UsersRepositoryService)
], UsersService.prototype, "userRepository", void 0);
__decorate([
    (0, common_1.Inject)(open_pay_service_1.OpenPayService),
    __metadata("design:type", open_pay_service_1.OpenPayService)
], UsersService.prototype, "openPayService", void 0);
__decorate([
    (0, common_1.Inject)(ailments_service_1.AilmentsService),
    __metadata("design:type", ailments_service_1.AilmentsService)
], UsersService.prototype, "ailmentsService", void 0);
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map