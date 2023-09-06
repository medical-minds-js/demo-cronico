export interface User {
  id: number;
  profileId: number;
  name: string;
  surname: string;
  secondSurname: string;
  birthDate: Date;
  userName: string;
  email: string;
  picture: string;
  enableOpenPay: boolean;
}
