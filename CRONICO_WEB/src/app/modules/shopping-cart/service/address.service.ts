import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '@core/interfaces/address.interface';
import {
  ApiDataResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { PostalCode } from '@core/interfaces/postal-codes.interface';
import { environment } from '@environments/environment';
import { SessionService } from '@services/session/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  public endpoint: string = environment.endpoint;
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  getAddressList(): Observable<ApiListResponse<Address>> {
    return this.http.get<ApiListResponse<Address>>(
      environment.endpoint + `/address/list`
    );
  }

  getPostalCodesList(code: number): Observable<ApiListResponse<PostalCode>> {
    return this.http.get<ApiListResponse<PostalCode>>(
      environment.endpoint + `/postal-codes/list/${code}`
    );
  }

  addAddress(address: Address): Observable<ApiDataResponse<Address>> {
    let data = {
      id: null,
      userId: this.sessionService.getUserId(),
      name: address.name,
      street: address.street,
      streetNumber: address.streetNumber,
      suburb: address.suburb,
      cp: address.cp,
      location: address.location,
      comments: address.comments,
      state: address.state,
      reference: address.reference,
      status: address.status,
    };
    return this.http.post<ApiDataResponse<Address>>(
      environment.endpoint + `/address/save`,
      data
    );
  }

  updateAddress(address: Address): Observable<ApiDataResponse<Address>> {
    return this.http.put<ApiDataResponse<Address>>(
      environment.endpoint + `/address/update`,
      address
    );
  }

  deleteAddress(addressId: number): Observable<ApiDataResponse<string>> {
    return this.http.delete<ApiDataResponse<string>>(
      environment.endpoint + `/address/delete/${addressId}`
    );
  }

  setActiveAddress(addressId: number): Observable<ApiDataResponse<string>> {
    return this.http.post<ApiDataResponse<string>>(
      environment.endpoint + `/address/user/active/${addressId}`,
      {}
    );
  }
}
