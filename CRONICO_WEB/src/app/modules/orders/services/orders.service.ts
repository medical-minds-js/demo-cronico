import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {
  ApiListResponse,
  ApiDataResponse,
} from '@core/interfaces/http.interfaces';
import { PaginationList } from '@core/interfaces/paginate.interface';
import { Subscription } from '@core/interfaces/subscription.interface';
import { map } from 'rxjs/operators';
import { Order } from '@core/interfaces/order.interface';
import { dataValue, itemsValue } from '@core/functions/api-value.function';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getSubscriptionsList(
    paginate: PaginationList
  ): Observable<ApiListResponse<Subscription>> {
    return this.http.get<any>(
      environment.endpoint +
        `/shopping/list?page=${paginate.page}&itemsPerPage=${paginate.itemsPerPage}`
    );
  }

  getSubscriptionsById(id: number): Observable<ApiDataResponse<Subscription>> {
    return this.http
      .get<ApiDataResponse<Subscription>>(
        environment.endpoint + `/shopping/${id}`
      )
      .pipe(
        map((res: ApiDataResponse<Subscription>) => {
          const data = dataValue(res);
          data.lastOrder = data.orders.sort(
            (a: Order, b: Order) => a.id - b.id
          )[0];
          return { ...res, data };
        })
      );
  }

  updateQuantities(sub: Subscription) {
    return this.http.put<ApiDataResponse<any>>(
      `${environment.endpoint}/subscription/update/quantity`,
      sub
    );
  }

  updateDelivery(sub: Subscription) {
    return this.http.put<ApiDataResponse<any>>(
      `${environment.endpoint}/subscription/update/delivery`,
      sub
    );
  }

  updateStatus(sub: Subscription) {
    return this.http.put<ApiDataResponse<any>>(
      `${environment.endpoint}/subscription/update/status`,
      sub
    );
  }
}
