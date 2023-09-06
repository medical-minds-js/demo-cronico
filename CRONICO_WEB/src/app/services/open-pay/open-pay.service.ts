import { Injectable } from '@angular/core';

export interface GeneratedCard {
  data: {
    id: string;
    holder_name: string;
    brand: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OpenPayService {
  private openPay: any;
  constructor() {
    if ((window as any).OpenPay) {
      this.openPay = (window as any).OpenPay;
      this.openPay.setId('m2ig50ylb4mqxyvcyllg');
      this.openPay.setApiKey('pk_10127e3279214b0181f7fe0e52aa9d40');
      this.openPay.setSandboxMode(true);
    }
  }

  generateDeviseSession(formId: string, fieldName: string): string {
    return this.openPay.deviceData.setup(formId, fieldName);
  }

  generateCard(formId: string, clientId: string): Promise<GeneratedCard> {
    return new Promise((resolve, reject) => {
      this.openPay.token.extractFormAndCreate(
        formId,
        (respone: any) => resolve(respone),
        (error: any) => reject(error),
        clientId
      );
    });
  }
}
