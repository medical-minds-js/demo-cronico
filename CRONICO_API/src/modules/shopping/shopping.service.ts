import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SubscriptionsRepositoryService } from './subscriptions-repository.service';
import { OrdersRepositoryService } from './orders-repository.service';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { OpenPayService } from '../../core/services/open-pay/open-pay.service';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { ProductsService } from '../products/products.service';
import { WmsCustomerRequirementDetailEntity } from 'src/core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity';
import { WmsCustomerRequirementRepositoryService } from './wms-customer-requirement-repository.service';
import { Pagination } from 'src/core/interfaces/pagination.interface';
import { UsersService } from '../users/users.service';
import { PaginatedList } from 'src/core/interfaces/paginated-list.interface';
import { SubcriptionOrder } from './dto/subcription-order.interface';
import { OpenPayCard } from 'src/core/services/open-pay/openpay.interfaces';

@Injectable()
export class ShoppingService {
  @Inject(SubscriptionsRepositoryService)
  private readonly subscriptionsService: SubscriptionsRepositoryService;

  @Inject(OrdersRepositoryService)
  private readonly orderRepository: OrdersRepositoryService;

  @Inject(WmsCustomerRequirementRepositoryService)
  private readonly wmsCustomerRequirementRepositoryService: WmsCustomerRequirementRepositoryService;

  @Inject(OpenPayService)
  private readonly openPayService: OpenPayService;

  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  @Inject(UsersService)
  private readonly userService: UsersService;

  async createOrder(
    confirmOrder: ConfirmOrder,
    order: OrderEntity,
    subscriptions: SubscriptionEntity[],
  ): Promise<any> {
    const saved = await this.orderRepository.saveFullOrder(order);
    await this.subscriptionsService.updateOrderId(
      saved.id,
      subscriptions.map((item) => item.id),
    );
    const newOrder: OrderEntity = { ...order, id: saved.id } as OrderEntity;
    const user = await this.userService.getById(order.userId);
    const paymentProcessed = await this.openPayService.processPayment(
      confirmOrder,
      newOrder,
      user,
    );
    if (paymentProcessed.status === 'completed') {
      await this.orderRepository.changePaidStatus(
        newOrder.id,
        paymentProcessed.id,
      );
      await this.orderRepository.changePaidStatus(
        newOrder.id,
        paymentProcessed.id,
      );
      await this.subscriptionsService.changePaidStatus(subscriptions);
      await Promise.all(
        subscriptions.map((item) =>
          this.sendRequiementWms(order.user.id, item),
        ),
      );
      return newOrder;
    } else {
      await this.orderRepository.changeNoPaymentStatus(newOrder.id);
      this.subscriptionsService.changeNoPaymentStatus(
        subscriptions.map((item) => item.id),
      );
      throw new Error('Error al procesar el pago');
    }
  }

  private async sendRequiementWms(
    userId: number,
    subscription: SubscriptionEntity,
  ) {
    const syncData = await this.generateSyncData(subscription);
    await this.wmsCustomerRequirementRepositoryService.saveOrder(
      userId,
      syncData,
    );
  }

  private async generateSyncData(
    subscription: SubscriptionEntity,
  ): Promise<WmsCustomerRequirementDetailEntity[]> {
    const ids = subscription.products.map((element) => element.productId);
    const products = await this.productsService.viewProductByIds(ids);
    const syncData: WmsCustomerRequirementDetailEntity[] = [];
    subscription.products.forEach((item) => {
      const product = products.find((product) => product.id === item.productId);
      if (product.productType === 2) {
        product.products.forEach((part) => {
          syncData.push({
            quantity: item.pieces,
            shortKey: part.supply.shortKey,
          } as WmsCustomerRequirementDetailEntity);
        });
      }
      syncData.push({
        quantity: item.pieces,
        shortKey: product.supply.shortKey,
      } as WmsCustomerRequirementDetailEntity);
    });
    return syncData;
  }

  async getShopingById(id: number): Promise<SubscriptionEntity> {
    const { items, total } = await this.getListShoppping(
      null,
      { page: 1, itemsPerPage: 1 },
      id,
    );
    if (total === 0) {
      throw new NotFoundException('No se encontró la suscripción');
    }
    return items[0];
  }

  async getListShoppping(
    userId: number,
    options: Pagination,
    id?: number,
  ): Promise<PaginatedList> {
    const total = await this.subscriptionsService.countSubscriptionByUserId(
      id,
      userId,
    );
    if (total === 0) {
      return { items: [], total };
    }
    const subscriptions =
      await this.subscriptionsService.findSubscriptionByUserId(
        id,
        userId,
        options,
      );
    if (subscriptions.length === 0) {
      return { items: [], total };
    }
    const subcriptionProducts =
      await this.subscriptionsService.findSubscriptionProductByIds(
        subscriptions.map((i) => i.id),
      );
    const orders = await this.orderRepository.getOrderBySubscriptionIds(
      subscriptions.map((item) => item.id),
    );
    const orderProducts = await this.orderRepository.getProductsByOrders(
      orders.map((item) => item.id),
    );
    const images = await this.productsService.viewImagesByIds(
      subcriptionProducts.map((item) => item.productId),
    );
    let card = null;
    if (id) {
      const tempOrder = orders.filter((i) =>
        i.subscriptions.map((i) => i.id).includes(subscriptions[0].id),
      );
      card = await this.getOrderCard(tempOrder[0].userId, tempOrder[0].id);
    }
    const items = subscriptions.map((item) => {
      const items = subcriptionProducts
        .filter((element) => element.subscriptionId === item.id)
        .map((element) => {
          const data = element.get({ plain: true });
          data.product.images = images.filter(
            (img) => img.productId === data.productId,
          );
          return data;
        });
      const foundOrders = orders
        .filter((i) => i.subscriptions.map((i) => i.id).includes(item.id))
        .map((order) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { subscriptions, ...rest } = order.get({ plain: true });
          return {
            ...rest,
            card,
            orderProducts: orderProducts
              .map((i) => i.get({ plain: true }))
              .filter((i) => i.orderId === order.id),
          };
        });
      return {
        ...item.get({ plain: true }),
        items,
        orders: foundOrders,
      } as SubcriptionOrder;
    });
    return { items, total };
  }

  async findSuscriptionsByUserId(
    userId: number,
  ): Promise<SubscriptionEntity[]> {
    const data = await this.subscriptionsService.findSubscriptionByUserId(
      null,
      userId,
      { page: 1, itemsPerPage: 10 },
    );
    return data.map((item) => {
      const { ...rest } = item.get({ plain: true });
      return rest as SubscriptionEntity;
    });
  }

  async findOrdersByUserId(userId: number): Promise<OrderEntity[]> {
    const data = await this.orderRepository.findOrdersByUserId(userId);
    return data.map((item) => {
      const { ...rest } = item.get({ plain: true });
      return rest as OrderEntity;
    });
  }

  async getOrderCard(userId, orderId): Promise<OpenPayCard> {
    const user = await this.userService.getById(userId);
    const order = await this.orderRepository.getOrderCardById(orderId);
    const card = await this.openPayService.getCardById(
      user.openPayId,
      order.card.cardOpenPayId,
    );
    return card;
  }
}
