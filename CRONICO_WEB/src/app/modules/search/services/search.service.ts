import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '@core/interfaces/http.interfaces';
import { ApiDataResponse } from '@core/interfaces/http.interfaces';
import { ApiListResponse } from '@core/interfaces/http.interfaces';
import {
  Product,
  ProductFilters,
  ProductSearch,
} from '@core/interfaces/product.interface';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public endpoint: string = environment.endpoint;
  constructor(private http: HttpClient) {}

  getProducts(
    data: ProductFilters
  ): Observable<ApiListResponse<ProductSearch>> {
    const params = data as any;
    return this.http.get<any>(environment.endpoint + '/products', { params });
  }

  getProductById(id: number): Observable<ApiDataResponse<Product>> {
    return this.http
      .get<any>(environment.endpoint + '/products' + `/${id}`)
      .pipe(map((response) => response.data));
  }
}
