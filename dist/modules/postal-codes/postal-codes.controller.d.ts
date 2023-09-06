import { SuccessListResponse } from 'src/core/clases/success-list.response';
export declare class PostalCodesController {
    private readonly cpService;
    getActivePostalCodes(params: any): Promise<SuccessListResponse>;
}
