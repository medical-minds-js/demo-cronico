import { SuccessListResponse } from 'src/core/clases/success-list.response';
export declare class MembershipsController {
    private readonly membershipsService;
    getMemberships(): Promise<SuccessListResponse>;
}
