import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
export declare class ShoppingCartService {
    private readonly shoppingCartRepository;
    private readonly addressService;
    private readonly cardsService;
    private readonly shoppingService;
    private readonly userService;
    private readonly productsService;
    private readonly subscriptionsService;
    private readonly membershipsService;
    findByUserId(userId: number): Promise<any[]>;
    save(userId: number, shoppingCart: ShoppingCartEntity): Promise<ShoppingCartEntity>;
    delete(id: number): Promise<number>;
    updateCart(userId: number, id: number, shoppingCart: ShoppingCartEntity): Promise<number[]>;
    confirmOrder(userId: number, confirmOrder: ConfirmOrder): Promise<string>;
    saveSubscription(userId: number, products: ShoppingCartEntity[]): Promise<SubscriptionEntity>;
    getProductDiscount(userId: number, productId: number, pieces: number): Promise<{
        discountProduct: number;
        countPieces: number;
    }>;
    getDiscountProduct(userId: number, productId: number, pieces: number): Promise<{
        discountProduct: number;
        countPieces: number;
    }>;
}
