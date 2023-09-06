import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
export declare class ShoppingCartRepositoryService {
    private readonly shoppingCartRepository;
    constructor(shoppingCartRepository: typeof ShoppingCartEntity);
    findItemsByIdUser(userId: number): Promise<ShoppingCartEntity[]>;
    save(shoppingCart: ShoppingCartEntity): Promise<ShoppingCartEntity>;
    delete(id: number): Promise<number>;
    findOneById(id: number): Promise<ShoppingCartEntity>;
    findPreviousProductByUser(userId: number, productId: number): Promise<ShoppingCartEntity>;
    update(id: number, shoppingCart: ShoppingCartEntity): Promise<number[]>;
    cleanShoppingCart(userId: number): Promise<number>;
}
