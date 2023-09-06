import { PaginatedList } from '../interfaces/paginated-list.interface';
export declare class SuccessListResponse {
    status: string;
    data: any;
    constructor(data: any[] | PaginatedList, total?: number);
}
