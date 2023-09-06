import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import {
  OpenPayCard,
  OpenPayCustomer,
  OpenPayPayment,
  OpenPayTokenCard,
} from './openpay.interfaces';
//class
import * as Openpay from 'openpay';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
//instantiation
const openpay = new Openpay(
  'm2ig50ylb4mqxyvcyllg',
  'sk_3c8428fe7638498f9ae9a0075570a9d4',
);

@Injectable()
export class OpenPayService {
  registerCustomer(data: OpenPayCustomer): Promise<any> {
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

  addCardToCustomer(
    customerId: string,
    cardRequest: OpenPayTokenCard,
  ): Promise<any> {
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

  processPayment(
    confirmOrder: ConfirmOrder,
    order: OrderEntity,
    user: UserEntity,
  ): Promise<OpenPayPayment> {
    return new Promise((resolve, reject) => {
      const totalItems = order.orderProducts.length;
      const description =
        'Cronico - Compra de ' +
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
        // customer: {
        //   name: order.user.name,
        //   last_name: order.user.surname + ' ' + order.user.secondSurname,
        //   //phone_number: order.user.phone,
        //   email: order.user.email,
        // },
      };
      openpay.customers.charges.create(
        user.openPayId,
        chargeRequest,
        (error, charge) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(charge);
        },
      );
    });
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ status: 'completed', id: '123456789' } as OpenPayPayment);
    //   }, 100);
    // });
  }

  getCardsByUser(customerId: string): Promise<OpenPayCard[]> {
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

  getCardById(customerId: string, cardId: string): Promise<OpenPayCard> {
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
}
