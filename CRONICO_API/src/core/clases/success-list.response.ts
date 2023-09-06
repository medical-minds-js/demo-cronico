import { PaginatedList } from '../interfaces/paginated-list.interface';

export class SuccessListResponse {
  status: string;
  data: any;
  constructor(data: any[] | PaginatedList, total: number = null) {
    this.status = 'success';
    if (Array.isArray(data)) {
      this.data = {
        items: data,
        results: data.length,
        total: total || data.length,
      };
    } else {
      this.data = {
        items: data.items,
        results: data.items.length,
        total: data.total,
      };
    }
  }
}
