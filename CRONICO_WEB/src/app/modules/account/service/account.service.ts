import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiDataResponse,
  ApiGeneralResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { User } from '@core/interfaces/user';
import {
  UserAilments,
  UserAilmentsProduct,
} from '@core/interfaces/user-ailments';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ApiDataResponse<User>> {
    return this.http
      .get<ApiDataResponse<User>>(environment.endpoint + '/user/data')
      .pipe(
        map((items) => {
          let user: any = items.data;
          user.picture = `${environment.domain}${user.picture}`;
          return items;
        })
      );
  }

  updateData(user: User): Observable<ApiDataResponse<any>> {
    return this.http
      .put<ApiDataResponse<User>>(
        environment.endpoint + '/user/data/update',
        user
      )
      .pipe(
        map((items) => {
          let user: any = items.data;
          user.picture = `${environment.domain}${user.picture}`;
          return items;
        })
      );
  }

  activePayment(): Observable<ApiDataResponse<User>> {
    return this.http.post<ApiDataResponse<User>>(
      environment.endpoint + '/user/account/active-payment',
      {}
    );
  }

  getPaymentId(): Observable<ApiDataResponse<string>> {
    return this.http.post<ApiDataResponse<string>>(
      environment.endpoint + '/user/account/payment-id',
      {}
    );
  }

  getAilmentsByUser(name?: string): Observable<ApiListResponse<UserAilments>> {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get<ApiListResponse<UserAilments>>(
      environment.endpoint + '/user/ailments',
      { params }
    );
  }

  addAilmentsToUser(id: number): Observable<ApiDataResponse<UserAilments>> {
    return this.http.post<ApiDataResponse<UserAilments>>(
      environment.endpoint + '/user/ailments',
      { id }
    );
  }

  getUserAilmentsDose(id: number): Observable<ApiDataResponse<UserAilments>> {
    return this.http.get<ApiDataResponse<UserAilments>>(
      environment.endpoint + '/user/ailments/' + id + '/show',
      {}
    );
  }

  configDoseTake(data: UserAilmentsProduct): Observable<ApiGeneralResponse> {
    return this.http.post<ApiGeneralResponse>(
      environment.endpoint + '/user/ailments/' + data.id + '/config-take',
      data
    );
  }

  saveTakeDose(data: UserAilmentsProduct): Observable<ApiGeneralResponse> {
    return this.http.post<ApiGeneralResponse>(
      environment.endpoint + '/user/ailments/' + data.id + '/dose',
      { id: data.id }
    );
  }
}
