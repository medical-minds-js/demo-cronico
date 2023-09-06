import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class AddressController {
    private readonly addressService;
    getCartListByUserId(params: any): Promise<SuccessListResponse>;
    addShoppingCart(body: AddressEntity): Promise<SuccessResponse>;
    updateShoppingCart(request: AddressEntity): Promise<SuccessResponse>;
    deleteShoppingCart(params: any): Promise<SuccessResponse>;
}
