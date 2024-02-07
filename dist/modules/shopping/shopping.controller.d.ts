import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { Pagination } from 'src/core/interfaces/pagination.interface';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class ShoppingController {
    private readonly shoppingService;
    getListShoppping(req: any, options: Pagination): Promise<SuccessListResponse>;
    getShoppping(req: any, params: any): Promise<SuccessListResponse>;
    getInfoShoppping(req: any, params: any): Promise<SuccessResponse>;
    getSubscriptionsByUserId(req: any): Promise<SuccessListResponse>;
    getOrdersByUserId(req: any): Promise<SuccessListResponse>;
    saveMemberships(req: any, data: any): Promise<SuccessResponse>;
}
