import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class ShoppingCartControllerController {
    private readonly shoppingCartService;
    getCartListByUserId(params: any): Promise<SuccessListResponse>;
    addShoppingCart(body: ShoppingCartEntity): Promise<SuccessResponse>;
    updateShoppingCart(request: ShoppingCartEntity): Promise<SuccessResponse>;
    deleteShoppingCart(params: any): Promise<SuccessResponse>;
}
