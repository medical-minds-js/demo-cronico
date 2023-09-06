import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';
export declare class HomeController {
    private readonly productsService;
    private readonly homeService;
    getMainProduct(): Promise<SuccessResponse>;
    getMainPackage(): Promise<SuccessResponse>;
    getNewProducts(): Promise<SuccessListResponse>;
    getHomeVideo(): Promise<SuccessListResponse>;
    getAboutUs(): Promise<SuccessListResponse>;
    getBenefits(): Promise<SuccessListResponse>;
    getSocialCause(): Promise<SuccessListResponse>;
    getTestimonials(): Promise<SuccessListResponse>;
    createRequestSupply(data: SupplyRequestEntity): Promise<SuccessListResponse>;
}
