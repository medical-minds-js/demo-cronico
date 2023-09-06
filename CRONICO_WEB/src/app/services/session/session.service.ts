import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public _loggedIn = new BehaviorSubject<boolean>(false);
  public _user = new BehaviorSubject<User>({
    name: 'Ingresa',
  } as User);
  private user: User = {} as User;

  constructor() {
    if (localStorage.getItem('token')) {
      this._loggedIn.next(true);
      this.user = {
        id: Number(localStorage.getItem('userId')),
        name: localStorage.getItem('name')!,
        userName: localStorage.getItem('userName')!,
        profileId: Number(localStorage.getItem('profileId')),
        picture: localStorage.getItem('picture'),
        enableOpenPay: localStorage.getItem('enableOpenPay') === '1',
      } as any;
      this._user.next(this.user);
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  login(user: User) {
    localStorage.setItem('name', user.name);
    localStorage.setItem('userId', `${user.id}`);
    localStorage.setItem('userName', user.userName);
    localStorage.setItem('profileId', `${user.profileId}`);
    localStorage.setItem('picture ', user.picture);
    localStorage.setItem('enableOpenPay', user.enableOpenPay ? '1' : ''),
      localStorage.setItem(
        'randomId',
        `${Math.floor(Math.random() * (900 - 100)) + 100}`
      );
    this._loggedIn.next(true);
    this.user = user;
    this._user.next(this.user);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
    this._loggedIn.next(false);
    this._user.next({ name: 'Ingresa' } as User);
  }

  getUser(): Observable<User> {
    return this._user.asObservable();
  }

  getUserObject(): User {
    return this.user;
  }

  getUserId(): number {
    const userId = localStorage.getItem('userId');
    return JSON.parse(userId!);
  }
}
