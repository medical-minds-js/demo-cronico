import { Injectable, Inject } from '@nestjs/common';
import { SHOPPING_CART_REPOSITORY } from 'src/core/constants';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { SaleEntity } from 'src/core/database/entities/sales/sale.entity';
import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';

@Injectable()
export class ShoppingCartRepositoryService {
  constructor(
    @Inject(SHOPPING_CART_REPOSITORY)
    private readonly shoppingCartRepository: typeof ShoppingCartEntity,
  ) {}

  async findItemsByIdUser(userId: number): Promise<ShoppingCartEntity[]> {
    return await this.shoppingCartRepository.findAll<ShoppingCartEntity>({
      where: { userId: [userId] },
      include: [{ model: ProductEntity, as: 'product', include: [SaleEntity] }],
    });
  }

  async save(shoppingCart: ShoppingCartEntity): Promise<ShoppingCartEntity> {
    return await this.shoppingCartRepository.create({
      userId: shoppingCart.userId,
      productId: shoppingCart.productId,
      dose: shoppingCart.dose,
      period: shoppingCart.period,
      pieces: shoppingCart.pieces,
      subtotal: shoppingCart.subtotal,
      discount: shoppingCart.discount,
      total: shoppingCart.total,
    });
  }

  async delete(id: number) {
    return await this.shoppingCartRepository.destroy<ShoppingCartEntity>({
      where: { id: [id] },
    });
  }

  async findOneById(id: number): Promise<ShoppingCartEntity> {
    return this.shoppingCartRepository.findOne({
      where: { id: [id] },
    });
  }

  async findPreviousProductByUser(
    userId: number,
    productId: number,
  ): Promise<ShoppingCartEntity> {
    return await this.shoppingCartRepository.findOne({
      where: { userId, productId },
      include: [{ model: ProductEntity, as: 'product' }],
    });
  }

  async update(
    id: number,
    shoppingCart: ShoppingCartEntity,
  ): Promise<number[]> {
    return await this.shoppingCartRepository.update<ShoppingCartEntity>(
      {
        userId: shoppingCart.userId,
        productId: shoppingCart.productId,
        dose: shoppingCart.dose,
        period: shoppingCart.period,
        pieces: shoppingCart.pieces,
        subtotal: shoppingCart.subtotal,
        discount: shoppingCart.discount,
        total: shoppingCart.total,
      },
      { where: { id } },
    );
  }

  async cleanShoppingCart(userId: number) {
    return this.shoppingCartRepository.destroy({
      where: { userId },
    });
  }
}
