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
    processPayment(confirmOrder, user, order, card, items) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ status: 'completed', id: '123456789' });
            }, 100);
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
};
OpenPayService = __decorate([
    (0, common_1.Injectable)()
], OpenPayService);
exports.OpenPayService = OpenPayService;
//# sourceMappingURL=open-pay.service%20copy.js.map