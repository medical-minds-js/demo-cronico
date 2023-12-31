import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class AddressController {
    private readonly addressService;
    getCartListByUserId(req: any): Promise<SuccessListResponse>;
    addShoppingCart(body: AddressEntity): Promise<SuccessResponse>;
    setDefaultCardByUser(req: any, params: any): Promise<SuccessListResponse>;
    updateShoppingCart(request: AddressEntity): Promise<SuccessResponse>;
    deleteShoppingCart(params: any): Promise<SuccessResponse>;
}
