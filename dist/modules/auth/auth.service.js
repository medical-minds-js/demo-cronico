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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const fail_response_1 = require("../../core/clases/fail.response");
const jwt_1 = require("@nestjs/jwt");
const password_strategy_service_1 = require("../../core/services/password-strategy/password-strategy.service");
const send_email_service_1 = require("../../core/services/send-email/send-email.service");
let AuthService = class AuthService {
    async register(data) {
        const previous = await this.usersService.findUserByEmail(data.email);
        if (previous) {
            throw new fail_response_1.FailResponse('El usuario ya esta registrado');
        }
        const randomSalt = this.passwordStrategy.generateSalt();
        const hassPass = this.passwordStrategy.generatePassword(data.pass, randomSalt);
        const user = await this.usersService.saveRegister(Object.assign(Object.assign({}, data), { profileId: 1, pass: hassPass, salt: randomSalt }));
        this.sendEmailService.sendWelcomeMail(user);
        const payload = { sub: user.id, username: user.userName };
        const token = await this.jwtService.sign(payload);
        return { access_token: token };
    }
    async login(loginDto) {
        const user = await this.usersService.findUserByEmail(loginDto.email);
        if (!user) {
            throw new fail_response_1.FailResponse('El usuario no esta registrado');
        }
        const isValid = this.passwordStrategy.validatePassword(loginDto.pass, user.salt, user.pass);
        if (!isValid) {
            throw new fail_response_1.FailResponse('La contraseña es incorrecta');
        }
        const payload = { sub: user.id, username: user.userName };
        const token = await this.jwtService.sign(payload);
        return { access_token: token };
    }
    async testEmail() {
        const newOrder = {
            id: 70,
            userId: 1,
            subscriptionStatusId: 3,
            name: 'LINAGLIPTINA',
            period: 30,
            subtotal: 160,
            discount: 0,
            total: 160,
            createdAt: '2023-10-10T17:17:02.000Z',
            nextDelivery: '2023-11-09',
            subscriptionStatus: {
                id: 3,
                name: 'Entrega pendiente',
            },
            items: [
                {
                    id: 81,
                    subscriptionId: 70,
                    statusId: 1,
                    productId: 9,
                    saleId: null,
                    period: 30,
                    dose: 2,
                    pieces: 2,
                    price: 80,
                    subtotal: 160,
                    discount: 0,
                    total: 160,
                    createdAt: '2023-10-10T17:17:02.000Z',
                    takeDose: null,
                    initialTake: null,
                    intakePeriod: null,
                    firstTake: null,
                    status: {
                        id: 1,
                        name: 'En proceso',
                    },
                    product: {
                        id: 9,
                        supplyId: 9,
                        name: 'LINAGLIPTINA',
                        description: 'LINAGLIPTINA. TABLETA. CADA TABLETA CONTIENE: LINAGLIPTINA 5 MG. ENVASE CON 30 TABLETAS.',
                        presentation: 30,
                        piecesPerBox: 30,
                        price: 80,
                        productType: 1,
                        createdAt: '2023-09-18T09:09:08.000Z',
                        images: [
                            {
                                id: 11,
                                productId: 9,
                                url: 'uploads/images/producto_2.png',
                            },
                        ],
                    },
                },
            ],
            orders: [
                {
                    id: 58,
                    orderStatusId: 1,
                    userId: 1,
                    cardId: 6,
                    name: 'LINAGLIPTINA',
                    total: 160,
                    street: 'Venustiano carranza',
                    streetNumber: '100',
                    suburb: 'LOMAS DE CHAPULTEPEC I SECCION',
                    cp: 11000,
                    location: 'Miguel Hidalgo',
                    state: 'Ciudad de México',
                    comments: 'Llamar en cuanto esté en la puerta, porque no se escucha cuando tocan.',
                    reference: 'Fachada amarilla con portón negro. Frente a lavandería La burbuja.',
                    startTime: null,
                    endTime: null,
                    rangeTimes: '08:00:00-11:59:59',
                    deliveryDate: '2023-10-12T17:17:02.000Z',
                    whoReceives: null,
                    relationShip: null,
                    visits: 0,
                    paymentId: 'trqjfoxbyweenll4snfp',
                    paymentCode: null,
                    createdAt: '2023-10-10T17:17:02.000Z',
                    orderStatus: {
                        id: 1,
                        name: 'Procesado',
                    },
                    card: null,
                    orderProducts: [
                        {
                            id: 79,
                            productId: 9,
                            orderId: 58,
                            subscriptionId: null,
                            saleId: null,
                            statusId: 1,
                            loteId: null,
                            batchCode: null,
                            expirationDate: null,
                            pieces: 2,
                            price: 80,
                            subtotal: 160,
                            discount: 0,
                            total: 160,
                            createdAt: '2023-10-10T17:17:02.000Z',
                            status: {
                                id: 1,
                                name: 'Procesando',
                            },
                        },
                    ],
                },
            ],
            user: {
                email: 'lgalindov97@gmail.com',
                name: 'test',
            },
        };
        this.sendEmailService.sendConfirmOrderMail(newOrder);
        return newOrder;
    }
};
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], AuthService.prototype, "usersService", void 0);
__decorate([
    (0, common_1.Inject)(jwt_1.JwtService),
    __metadata("design:type", jwt_1.JwtService)
], AuthService.prototype, "jwtService", void 0);
__decorate([
    (0, common_1.Inject)(password_strategy_service_1.PasswordStrategyService),
    __metadata("design:type", password_strategy_service_1.PasswordStrategyService)
], AuthService.prototype, "passwordStrategy", void 0);
__decorate([
    (0, common_1.Inject)(send_email_service_1.SendEmailService),
    __metadata("design:type", send_email_service_1.SendEmailService)
], AuthService.prototype, "sendEmailService", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map