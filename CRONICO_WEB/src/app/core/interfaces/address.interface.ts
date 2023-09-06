import { DeliveryTime } from './deliveries-times-interface';

export interface Address {
  id: number;
  userId: number;
  name: string;
  street: string;
  streetNumber: string;
  interiorNumber: string;
  suburb: string;
  cp: number;
  location: string;
  comments: string;
  state: string;
  reference: null;
  status: number;
  deliveryTimes?: DeliveryTime[];
  editing: boolean; //front
}
