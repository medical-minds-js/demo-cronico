import { Time } from '@angular/common';

export interface DeliveryTime {
  id: number;
  name: string;
  addressId: number;
  startTime: Time;
  endTime: Time;
  active: number;
}
