import { OrderProductEntity } from 'src/core/database/entities/order-products/order-product.entity';
export declare class ShoppingRepositoryService {
    private readonly shoppingRepository;
    constructor(shoppingRepository: typeof OrderProductEntity);
    saveShoppings(userId: number, items: OrderProductEntity[]): Promise<OrderProductEntity[]>;
    getProductsByOrders(ids: number[]): Promise<OrderProductEntity[]>;
}
