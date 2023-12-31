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
exports.UsersRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const profile_entity_1 = require("../../core/database/entities/profile/profile.entity");
const ailment_images_entity_1 = require("../../core/database/entities/ailments-images/ailment-images.entity");
const ailment_entity_1 = require("../../core/database/entities/ailments/ailment.entity");
const sequelize_1 = require("sequelize");
const user_ailments_product_entity_1 = require("../../core/database/entities/user-ailments-product/user-ailments-product.entity");
const product_entity_1 = require("../../core/database/entities/product/product.entity");
const setting_entity_1 = require("../../core/database/entities/settings/setting.entity");
const product_images_entity_1 = require("../../core/database/entities/product-images/product-images.entity");
let UsersRepositoryService = class UsersRepositoryService {
    constructor(userRepository, ailmentsRepository, userAilmentsRepository, userAilmentsProductsRepository, doseTakenRepository, userSettingRepository, userFactInfoRepository) {
        this.userRepository = userRepository;
        this.ailmentsRepository = ailmentsRepository;
        this.userAilmentsRepository = userAilmentsRepository;
        this.userAilmentsProductsRepository = userAilmentsProductsRepository;
        this.doseTakenRepository = doseTakenRepository;
        this.userSettingRepository = userSettingRepository;
        this.userFactInfoRepository = userFactInfoRepository;
    }
    async findAll() {
        return await this.userRepository.findAll({
            include: [profile_entity_1.ProfileEntity],
        });
    }
    async findOneById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async findUsersByIds(ids) {
        const data = await this.userRepository.findAll({
            where: { id: { [sequelize_1.Op.in]: ids } },
        });
        return data.map((i) => i.get({ plain: true }));
    }
    async findLogin(loginDto) {
        return await this.userRepository.findOne({
            where: { email: loginDto.email, pass: loginDto.pass },
        });
    }
    async findUserByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    async save(data) {
        return this.userRepository.create(data);
    }
    async update(data) {
        return await this.userRepository.update({
            id: data.id,
            profileId: data.profileId,
            name: data.name,
            surname: data.surname,
            secondSurname: data.secondSurname,
            birthDate: data.birthDate,
            picture: data.picture,
            cellPhone: data.cellPhone,
            gender: data.gender,
            statusInfo: data.statusInfo,
            haveComment: data.haveComment,
        }, {
            where: { id: [data.id] },
        });
    }
    async updateOpenPayId(userId, openPayId) {
        return await this.userRepository.update({ enableOpenPay: '1', openPayId: openPayId }, { where: { id: userId } });
    }
    async findAilments(userId) {
        const data = await this.userRepository.findOne({
            where: { id: userId },
            include: [
                {
                    model: ailment_entity_1.AilmentEntity,
                    include: [ailment_images_entity_1.AilmentsImageEntity],
                },
            ],
        });
        return data.ailments;
    }
    async getProductsAilments(id) {
        const data = await this.ailmentsRepository.findOne({
            where: { id },
            include: [
                {
                    model: product_entity_1.ProductEntity,
                },
            ],
        });
        return data.products;
    }
    async getProductByUserAilments(id) {
        return this.userAilmentsProductsRepository.findOne({
            where: { id },
        });
    }
    async updateProductByUserAilments(id, data) {
        const update = {
            firstTake: data.firstTake,
            intakePeriod: data.intakePeriod,
        };
        if (!data.firstTake) {
            update.firstTake = new Date();
        }
        return this.userAilmentsProductsRepository.update({
            firstTake: data.firstTake,
            intakePeriod: data.intakePeriod,
        }, { where: { id } });
    }
    async addAilments(data) {
        const userAilments = await this.userAilmentsRepository.create(Object.assign({}, data));
        await this.userAilmentsProductsRepository.bulkCreate(data.userAilmentsProducts.map((i) => (Object.assign(Object.assign({}, i), { userAilmentsId: userAilments.id }))));
        return userAilments;
    }
    async getUserAilments(id) {
        const data = await this.userAilmentsRepository.findOne({
            where: { id },
            include: [
                {
                    model: user_ailments_product_entity_1.UserAilmentsProductEntity,
                    include: [
                        {
                            model: product_entity_1.ProductEntity,
                            include: [product_images_entity_1.ProductImageEntity],
                        },
                    ],
                },
            ],
        });
        return data;
    }
    async viewDoseTakenByDate(userAilmentsId) {
        const tmp = new Date().toISOString().split('T')[0];
        const data = await this.doseTakenRepository.findAll({
            where: {
                userAilmentsId,
                doseDate: {
                    [sequelize_1.Op.between]: [tmp + ' 00:00:00', tmp + ' 23:59:59'],
                },
            },
            include: [user_ailments_product_entity_1.UserAilmentsProductEntity],
        });
        return data.map((i) => {
            const info = i.get({ plain: true });
            delete info.userAilments;
            return info;
        });
    }
    async createDoseTaken(data) {
        return this.doseTakenRepository.create(Object.assign(Object.assign({}, data), { doseDate: new Date(), status: 1 }));
    }
    async getSettings(id) {
        const data = await this.userRepository.findOne({
            where: { id },
            include: [{ model: setting_entity_1.SettingEntity }],
        });
        return data.settings.map((i) => {
            const item = i.get({ plain: true });
            return {
                id: item.UserSettingEntity.id,
                settingId: item.UserSettingEntity.settingId,
                code: item.code,
                value: item.UserSettingEntity.value,
            };
        });
    }
    async findUserSetting(userId, settingId) {
        return this.userSettingRepository.findOne({ where: { userId, settingId } });
    }
    async createSetting(data) {
        return this.userSettingRepository.create(Object.assign({}, data));
    }
    async updateSetting(id, value) {
        return this.userSettingRepository.update({ value }, { where: { id } });
    }
    async findUserSettingById(id) {
        return this.userSettingRepository.findOne({ where: { id } });
    }
    async createFactInfo(data) {
        return this.userFactInfoRepository.create(Object.assign({}, data));
    }
    async updateFactInfo(id, value) {
        return this.userFactInfoRepository.update({
            id: value.id,
            userId: value.userId,
            name: value.name,
            fiscalName: value.fiscalName,
            rfc: value.rfc,
            cp: value.cp,
            state: value.state,
            location: value.location,
            street: value.street,
            suburb: value.suburb,
            streetNumber: value.streetNumber,
            interiorNumber: value.interiorNumber,
        }, { where: { id } });
    }
    async getFactInfoByUserId(userId) {
        return this.userFactInfoRepository.findOne({ where: { userId: userId } });
    }
};
UsersRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.AILMENT_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.USER_AILMENTS_REPOSITORY)),
    __param(3, (0, common_1.Inject)(constants_1.USER_AILMENTS_PRODUCT_REPOSITORY)),
    __param(4, (0, common_1.Inject)(constants_1.DOSES_TAKEN_REPOSITORY)),
    __param(5, (0, common_1.Inject)(constants_1.USER_SETTING_REPOSITORY)),
    __param(6, (0, common_1.Inject)(constants_1.USER_FACT_INFO_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], UsersRepositoryService);
exports.UsersRepositoryService = UsersRepositoryService;
//# sourceMappingURL=users-repository.service.js.map