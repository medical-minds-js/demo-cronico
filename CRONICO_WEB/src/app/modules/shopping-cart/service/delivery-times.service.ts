import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';
import {
  ApiDataResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryTimesService {
  public endpoint: string = environment.endpoint;
  constructor(private http: HttpClient) {}

  updateDeliveryTimes(
    delivery: DeliveryTime
  ): Observable<ApiDataResponse<DeliveryTime>> {
    return this.http.put<ApiDataResponse<DeliveryTime>>(
      environment.endpoint + `/deliveries-times/update`,
      delivery
    );
  }

  getDeliveryTimesList(): Observable<ApiListResponse<DeliveryTime>> {
    return this.http.get<ApiListResponse<DeliveryTime>>(
      environment.endpoint + `/deliveries-times/list`
    );
  }
}
