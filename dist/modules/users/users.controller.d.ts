/// <reference types="multer" />
import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { AilmentsFilters } from '../ailments/interfaces/ailments-filters';
import { UserAilmentsProductEntity } from 'src/core/database/entities/user-ailments-product/user-ailments-product.entity';
import { AilmentAdd } from './interfaces/ailmentAdd.interface';
export declare class UsersController {
    private readonly usersService;
    private readonly ailmentsService;
    getUser(req: any): Promise<SuccessResponse>;
    updateUser(req: any): Promise<SuccessResponse>;
    addUserImage(req: any, file: Express.Multer.File): Promise<Express.Multer.File>;
    activePayment(req: any): Promise<SuccessResponse>;
    getPaymentId(req: any): Promise<SuccessResponse>;
    getAilments(req: any, filters: AilmentsFilters): Promise<SuccessListResponse>;
    addAilments(req: any, ailmentData: AilmentAdd): Promise<SuccessListResponse>;
    getDoseByAilments(req: any, params: any): Promise<SuccessListResponse>;
    configUserAilmentsProduct(params: any, data: UserAilmentsProductEntity): Promise<SuccessListResponse>;
    createDoseByAilments(req: any, data: UserAilmentsProductEntity): Promise<SuccessListResponse>;
    getSettings(req: any): Promise<SuccessListResponse>;
    saveSetting(req: any, data: any): Promise<SuccessListResponse>;
    updateSetting(req: any, data: any): Promise<SuccessListResponse>;
}
