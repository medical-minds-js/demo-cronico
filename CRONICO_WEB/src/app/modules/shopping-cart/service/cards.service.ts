import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';
import { ApiListResponse } from '@core/interfaces/http.interfaces';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  public endpoint: string = environment.endpoint;
  constructor(private http: HttpClient) {}

  getCardsByUser(): Observable<ApiListResponse<Card>> {
    return this.http.get<ApiListResponse<Card>>(
      environment.endpoint + `/cards/user`
    );
  }

  addCardByUser(data: CreateCard): Observable<ApiListResponse<string>> {
    return this.http.post<ApiListResponse<string>>(
      environment.endpoint + `/cards/user`,
      data
    );
  }

  setDefaultCardByUser(data: Card): Observable<ApiListResponse<string>> {
    return this.http.post<ApiListResponse<string>>(
      environment.endpoint + `/cards/user/active/` + data.id,
      data
    );
  }
}
