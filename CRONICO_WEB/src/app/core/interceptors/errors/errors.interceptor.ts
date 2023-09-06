import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CatchErrorResponse } from '@core/interfaces/error-response.interface';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            const message =
              'Tu sesión ha expirado por favor inicia sesión nuevamente.';
            const data: CatchErrorResponse = { status: 401, message: message };
            return throwError(data);
          }
        }
        return throwError(error);
      })
    );
  }
}
