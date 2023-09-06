import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {
  ApiDataResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { Product } from '@core/interfaces/product.interface';
import { SupplyRequest } from '@core/interfaces/supply-request.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public endpoint: string = environment.endpoint;
  constructor(private http: HttpClient) {}

  getMainProduct(): Observable<ApiDataResponse<Product>> {
    return this.http.get<any>(environment.endpoint + '/home/main-product');
  }

  getMainPackage(): Observable<ApiDataResponse<Product>> {
    return this.http.get<any>(environment.endpoint + '/home/main-package');
  }

  getNewProducts(): Observable<ApiListResponse<Product>> {
    return this.http.get<any>(environment.endpoint + '/home/new-products');
  }

  requestNewProduct(
    data: SupplyRequest
  ): Observable<ApiDataResponse<SupplyRequest>> {
    return this.http.post<any>(
      environment.endpoint + '/home/request-supply',
      data
    );
  }
}
