import { Injectable } from '@angular/core';
import { SwaCallbackFunction } from '@core/interfaces/swa-confirm-calback.interface';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwaService {
  constructor() {}

  loading(title: string = 'Cargando... ', text?: string) {
    let options: any = {
      title: title,
      text: text ? text : '',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    };
    Swal.fire(options);
  }

  close() {
    Swal.close();
  }

  error(title: string, text?: string) {
    let options: any = {
      title: title,
      text: text ? text : '',
      type: 'error',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      didOpen: () => {
        Swal.hideLoading();
      },
    };
    Swal.fire(options);
  }

  success(title: string, option?: string | Function, callback?: Function) {
    let options: any = {
      title: title,
      text: typeof option === 'string' ? option : '',
      type: 'success',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      didOpen: () => {
        Swal.hideLoading();
      },
    };
    if (callback) {
      Swal.fire(options).then((result: any) => {
        callback(result);
      });
    } else if (typeof option === 'function') {
      Swal.fire(options).then((result: any) => {
        option(result);
      });
    } else {
      Swal.fire(options);
    }
  }

  info(title: string, text?: string, callback?: Function) {
    let options: any = {
      title: title,
      text: text ? text : '',
      type: 'warning',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      didOpen: () => {
        Swal.hideLoading();
      },
    };
    if (callback) {
      Swal.fire(options).then((result: any) => {
        callback(result);
      });
    } else {
      Swal.fire(options);
    }
  }

  confirm(title = '', text = '', callbackConfirm?: SwaCallbackFunction) {
    let options: any = {
      type: 'warning',
      title: title,
      text: text,
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowEscapeKey: true,
      reverseButtons: true,
    };

    Swal.fire(options).then(function (result) {
      callbackConfirm!({ value: result.value });
    });
  }
}
