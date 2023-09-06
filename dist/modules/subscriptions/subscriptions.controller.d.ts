import { SuccessListResponse } from 'src/core/clases/success-list.response';
export declare class SubscriptionsController {
    private readonly subscriptionsService;
    getCartListByUserId(req: any): Promise<SuccessListResponse>;
}
