import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AppState } from './app-store.state';
import { reducer } from './app-store.reducer';
import { AppEffect } from '@core/interfaces/app-effect.interface';

export class BaseStore {
  protected state: AppState = {} as AppState;
  private _state: BehaviorSubject<AppState> = new BehaviorSubject<AppState>(
    this.state
  );
  private effects: AppEffect[] = [];

  constructor() {}

  protected publish() {
    this._state.next(this.state);
  }

  protected changeState(type: string, payload?: any): boolean {
    this.state = reducer(this.state, {
      type,
      payload,
    });
    this._state.next(this.state);
    return true;
  }

  public getState(): Observable<AppState> {
    return this._state.asObservable();
  }

  protected getObjectState(): AppState {
    return this.state;
  }

  protected addEffect(name: string) {
    if (this.state[name as keyof AppState]) {
      const found = this.effects.find((i) => i.name === name);
      if (!found) {
        this.effects.push({ name, listener: new Subject<any>() });
      }
      return;
    }
    throw new Error(
      'BaseStore: No se puede agregar el effect para la propiedad "' +
        name +
        '"'
    );
  }

  public getEffect<T>(name: string): Observable<T> {
    const found = this.effects.find((i) => i.name === name);
    if (!found) {
      throw new Error(
        'BaseStore:  El efecto "' + name + '" no esta registrado en el store'
      );
    }
    return found.listener.asObservable();
  }

  protected publishEffect(name: string) {
    const found = this.effects.find((i) => i.name === name);
    if (!found) {
      throw new Error(
        'BaseStore: No se puede publicar el effect "' +
          name +
          '", aun no esta registrado'
      );
    }
    found.listener.next(this.state[name as keyof AppState]);
  }
}
