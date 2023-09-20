"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPayService = void 0;
const common_1 = require("@nestjs/common");
const Openpay = require("openpay");
const openpay = new Openpay('m2ig50ylb4mqxyvcyllg', 'sk_3c8428fe7638498f9ae9a0075570a9d4');
let OpenPayService = class OpenPayService {
    registerCustomer(data) {
        return new Promise((resolve, reject) => {
            openpay.customers.create(data, (errr, body, response) => {
                if (errr) {
                    reject(errr);
                    return;
                }
                resolve(body);
            });
        });
    }
    addCardToCustomer(customerId, cardRequest) {
        return new Promise((resolve, reject) => {
            openpay.customers.cards.create(customerId, cardRequest, (error, card) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(card);
            });
        });
    }
    processPayment(confirmOrder, order, user) {
        console.log(confirmOrder, order, user);
        return new Promise((resolve, reject) => {
            const totalItems = order.orderProducts.length;
            const description = 'Cronico - Compra de ' +
                totalItems +
                ' producto' +
                (totalItems > 1 ? 's' : '');
            const chargeRequest = {
                source_id: order.card.cardOpenPayId,
                method: 'card',
                amount: order.total,
                currency: 'MXN',
                description: description,
                order_id: order.id,
                device_session_id: confirmOrder.deviceSession,
            };
            openpay.customers.charges.create(user.openPayId, chargeRequest, (error, charge) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(charge);
            });
        });
    }
    getCardsByUser(customerId) {
        const searchParams = { limit: 100 };
        return new Promise((resolve, reject) => {
            openpay.customers.cards.list(customerId, searchParams, (error, list) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(list);
            });
        });
    }
    getCardById(customerId, cardId) {
        return new Promise((resolve, reject) => {
            openpay.customers.cards.get(customerId, cardId, (error, card) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(card);
            });
        });
    }
};
OpenPayService = __decorate([
    (0, common_1.Injectable)()
], OpenPayService);
exports.OpenPayService = OpenPayService;
//# sourceMappingURL=open-pay.service.js.map