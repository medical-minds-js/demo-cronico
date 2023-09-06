import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { ShoppingCartEntity } from 'src/core/database/entities/shopping-carts/shopping-cart.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
export declare class ShoppingCartControllerController {
    private readonly shoppingCartService;
    getCartListByUserId(params: any): Promise<SuccessListResponse>;
    addShoppingCart(body: ShoppingCartEntity, req: any): Promise<SuccessResponse>;
    updateShoppingCart(request: ShoppingCartEntity, req: any): Promise<SuccessResponse>;
    deleteShoppingCart(params: any): Promise<SuccessResponse>;
    confirmOrder(req: any, confirmOrder: ConfirmOrder): Promise<SuccessResponse>;
}
