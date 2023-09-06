import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiDataResponse,
  ApiListResponse,
  ListResponse,
} from '@core/interfaces/http.interfaces';
import { ShoppingCart } from '@core/interfaces/order.interface';
import { environment } from '@environments/environment';
import { SessionService } from '@services/session/session.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public endpoint: string = environment.endpoint;
  constructor(private http: HttpClient) {}

  getShoppingCarts(userId: number): Observable<ApiListResponse<ShoppingCart>> {
    return this.http.get<any>(
      environment.endpoint + `/shopping-cart/list/${userId}`
    );
  }

  addShoppingCart(
    data: ShoppingCart
  ): Observable<ApiDataResponse<ShoppingCart>> {
    const cleanData = {
      productId: data.productId,
      dose: data.dose,
      pieces: data.pieces,
      suggestedPieces: data.suggestedPieces,
      period: data.period,
    };
    return this.http.post<ApiDataResponse<ShoppingCart>>(
      environment.endpoint + `/shopping-cart/save`,
      cleanData
    );
  }

  updateShoppingCart(
    data: ShoppingCart
  ): Observable<ApiDataResponse<ShoppingCart>> {
    const cleanData = {
      id: data.id,
      productId: data.productId,
      dose: data.dose,
      pieces: data.pieces,
      suggestedPieces: data.suggestedPieces,
      period: data.period,
    };
    return this.http.put<ApiDataResponse<ShoppingCart>>(
      environment.endpoint + `/shopping-cart/update`,
      cleanData
    );
  }

  deleteShoppingCart(
    shoppingCartId: number
  ): Observable<ApiDataResponse<string>> {
    return this.http.delete<ApiDataResponse<string>>(
      environment.endpoint + `/shopping-cart/delete/${shoppingCartId}`
    );
  }

  confirmOrder(deviceSession: string): Observable<ApiDataResponse<string>> {
    return this.http.post<ApiDataResponse<string>>(
      environment.endpoint + `/shopping-cart/confirm-order`,
      { deviceSession }
    );
  }
}
