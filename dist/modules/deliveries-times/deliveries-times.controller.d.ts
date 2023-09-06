import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';
export declare class DeliveriesTimesController {
    private readonly deliveriesTimesService;
    getCartListByUserId(): Promise<SuccessListResponse>;
    addShoppingCart(body: DeliveryTimeEntity): Promise<SuccessResponse>;
    updateDeliveryTime(request: DeliveryTimeEntity): Promise<SuccessResponse>;
    deleteShoppingCart(params: any): Promise<SuccessResponse>;
}
