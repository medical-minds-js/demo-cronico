import { CatchErrorResponse } from '@core/interfaces/error-response.interface';
import {
  ApiDataResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { SwaService } from '@services/swa/swa.service';

export function observer(
  swaService: SwaService,
  successCallback?: Function | string
) {
  return {
    next: <T>(data: boolean | ApiListResponse<T> | ApiDataResponse<T>) => {
      if (typeof data === 'boolean') {
        if (successCallback && typeof successCallback === 'string') {
          swaService.success(successCallback);
        } else if (successCallback && typeof successCallback === 'function') {
          successCallback(data);
        } else {
          swaService.close();
        }
      } else {
        if (data.status === 'success') {
          if (successCallback && typeof successCallback === 'string') {
            swaService.success(successCallback);
          } else if (successCallback && typeof successCallback === 'function') {
            successCallback(data);
          } else {
            swaService.close();
          }
        } else if (data.status === 'fail') {
          const info =
            typeof data.data === 'string'
              ? data.data
              : 'Valida la información ingresada.';
          swaService.info(info);
        } else if (data.status === 'error') {
          const info = data.message || 'Error en la solicitud.';
          swaService.error(info);
        } else {
          swaService.close();
          console.error('observer : status desconocido ' + data.status);
        }
      }
    },
    error: <T>(
      error:
        | string
        | ApiListResponse<T>
        | ApiDataResponse<T>
        | CatchErrorResponse
    ) => {
      if (typeof error === 'string') return swaService.error(error);
      if (
        typeof error === 'object' &&
        error.hasOwnProperty('status') &&
        error.hasOwnProperty('message')
      ) {
        const catched: CatchErrorResponse = error as CatchErrorResponse;
        if (catched.status === 401)
          return swaService.info(catched.message, '', () => {
            window.localStorage.clear();
            window.location.href = '/auth/login';
          });
        if (catched.status === 400) return swaService.info(catched.message);
        return swaService.info(catched.message);
      }
      console.error(error);
      swaService.error(error.message || '');
    },
  };
}
