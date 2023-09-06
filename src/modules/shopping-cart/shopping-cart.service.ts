import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ShoppingCartRepositoryService } from './shopping-cart-repository.service';
import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
import { AddressService } from '../address/address.service';
import { CardsService } from '../cards/cards.service';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { ShoppingService } from '../shopping/shopping.service';
import { UsersService } from '../users/users.service';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { ProductsService } from '../products/products.service';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { SubscriptionProductEntity } from 'src/core/database/entities/subscription-products/subscription-product.entity';
import { SubscriptionsRepositoryService } from '../shopping/subscriptions-repository.service';

@Injectable()
export class ShoppingCartService {
  @Inject(ShoppingCartRepositoryService)
  private readonly shoppingCartRepository: ShoppingCartRepositoryService;

  @Inject(AddressService)
  private readonly addressService: AddressService;

  @Inject(CardsService)
  private readonly cardsService: CardsService;

  @Inject(ShoppingService)
  private readonly shoppingService: ShoppingService;

  @Inject(UsersService)
  private readonly userService: UsersService;

  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  @Inject(SubscriptionsRepositoryService)
  private readonly subscriptionsService: SubscriptionsRepositoryService;

  async findByUserId(userId: number): Promise<ShoppingCartEntity[]> {
    const data = await this.shoppingCartRepository.findItemsByIdUser(userId);
    return data.map((item) => {
      const { ...rest } = item.get({ plain: true });
      return rest as ShoppingCartEntity;
    });
  }

  async save(
    userId: number,
    shoppingCart: ShoppingCartEntity,
  ): Promise<ShoppingCartEntity> {
    const previousProduct =
      await this.shoppingCartRepository.findPreviousProductByUser(
        userId,
        shoppingCart.productId,
      );
    if (previousProduct) {
      const previousProductData = previousProduct.get({ plain: true });
      previousProductData.dose += shoppingCart.dose;
      previousProductData.pieces += shoppingCart.pieces;
      previousProductData.subtotal =
        shoppingCart.pieces * previousProduct.product.price;
      previousProductData.discount = 0;
      previousProductData.total +=
        previousProductData.subtotal - previousProductData.discount;
      await this.shoppingCartRepository.update(
        previousProduct.id,
        previousProductData,
      );
      return previousProductData;
    } else {
      const product = await this.productsService.getProductById(
        shoppingCart.productId,
      );
      shoppingCart.subtotal = shoppingCart.pieces * product.price;
      shoppingCart.discount = 0;
      shoppingCart.total = shoppingCart.subtotal - shoppingCart.discount;
      shoppingCart.userId = userId;
      const data = await this.shoppingCartRepository.save(shoppingCart);
      return data.get({ plain: true }) as ShoppingCartEntity;
    }
  }

  async delete(id: number): Promise<number> {
    const cartFinded = await this.shoppingCartRepository.findOneById(id);
    if (cartFinded == null) {
      return -1;
    }
    return await this.shoppingCartRepository.delete(id);
  }

  async updateCart(
    userId: number,
    id: number,
    shoppingCart: ShoppingCartEntity,
  ): Promise<number[]> {
    const cartFinded = await this.shoppingCartRepository.findOneById(id);
    if (!cartFinded) {
      throw new NotFoundException('Registro no encontrado');
    }
    const product = await this.productsService.getProductById(
      shoppingCart.productId,
    );
    shoppingCart.subtotal = shoppingCart.pieces * product.price;
    shoppingCart.discount = 0;
    shoppingCart.total = shoppingCart.subtotal - shoppingCart.discount;
    shoppingCart.userId = userId;
    const data = await this.shoppingCartRepository.update(id, shoppingCart);
    return data;
  }

  async confirmOrder(
    userId: number,
    confirmOrder: ConfirmOrder,
  ): Promise<string> {
    const user = await this.userService.getById(userId);
    const products = await this.shoppingCartRepository.findItemsByIdUser(
      userId,
    );
    const subcription30 = products.filter((i) => Number(i.period) === 30);
    const subcription15 = products.filter((i) => Number(i.period) === 15);
    const process = [];
    if (subcription30.length > 0) {
      process.push(subcription30);
    }
    if (subcription15.length > 0) {
      process.push(subcription15);
    }
    const subscriptions = await Promise.all(
      process.map((products) => this.saveSubscription(userId, products)),
    );
    const address = await this.addressService.findActiveByUserId(userId);
    const card = await this.cardsService.getActiveByUser(userId);
    const rangeTimes = address.deliveryTimes
      .map((i) => i.startTime + '-' + i.endTime)
      .join(', ');
    let name = products.map((i) => i.product.name).join(', ');
    if (products.length > 3) {
      name =
        products[0].product.name +
        ' y ' +
        (products.length - 1) +
        ' productos más';
    }
    const order: OrderEntity = {
      orderStatusId: 1,
      userId,
      cardId: card.id,
      name,
      total: products.reduce((prev, curr) => prev + curr.total, 0),
      street: address.street,
      streetNumber: address.streetNumber,
      suburb: address.suburb,
      cp: address.cp,
      location: address.location,
      state: address.state,
      comments: address.comments,
      reference: address.reference,
      rangeTimes: rangeTimes,
      visits: 0,
      user: user.get({ plain: true }),
      card: card.get({ plain: true }),
      orderProducts: products.map((i) => {
        const data = i.get({ plain: true });
        return {
          ...data,
          id: null,
          statusId: 1,
          price: data.product.price,
        };
      }),
    } as any;
    let orderCreated;
    try {
      orderCreated = await this.shoppingService.createOrder(
        confirmOrder,
        order,
        subscriptions,
      );
      const products = await this.shoppingCartRepository.cleanShoppingCart(
        userId,
      );
    } catch (e) {
      console.log(e);
      throw e;
    }
    return orderCreated;
  }

  async saveSubscription(
    userId: number,
    products: ShoppingCartEntity[],
  ): Promise<SubscriptionEntity> {
    let name = products.map((i) => i.product.name).join(', ');
    if (products.length > 3) {
      name =
        products[0].product.name +
        ' y ' +
        (products.length - 1) +
        ' productos más';
    }
    const subcription: SubscriptionEntity = {
      subscriptionStatusId: 1,
      userId,
      name,
      period: products[0].period,
      pieces: products.reduce((prev, curr) => prev + curr.pieces, 0),
      subtotal: products.reduce((prev, curr) => prev + curr.subtotal, 0),
      discount: products.reduce((prev, curr) => prev + curr.discount, 0),
      total: products.reduce((prev, curr) => prev + curr.total, 0),
    } as any;
    const subcriptionProducts: SubscriptionProductEntity[] = products.map(
      (i) => {
        const { period, dose, pieces, subtotal, discount, total, product } =
          i.get({
            plain: true,
          });
        return {
          statusId: 1,
          userId,
          productId: product.id,
          saleId: product.sale ? product.sale.id : null,
          period,
          dose,
          price: product.price,
          pieces,
          subtotal,
          discount,
          total,
        } as any;
      },
    );
    const saved = await this.subscriptionsService.saveSubscription(
      subcription,
      subcriptionProducts,
    );
    return this.subscriptionsService.findFullSubscriptionById(saved.id);
  }
}
