import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessToken } from '@core/interfaces/access-token.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: Register): Observable<AccessToken> {
    return this.http.post<any>(environment.endpoint + '/auth/create', data);
  }

  login(data: Login): Observable<AccessToken> {
    return this.http.post<any>(environment.endpoint + '/auth/web', data);
  }
}
