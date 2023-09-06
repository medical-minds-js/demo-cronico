import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { AilmentsFilters } from './interfaces/ailments-filters';
export declare class AilmentsController {
    private readonly ailmentRepository;
    viewAll(filters: AilmentsFilters): Promise<SuccessListResponse>;
}
