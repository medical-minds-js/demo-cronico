import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { ProfileEntity } from 'src/core/database/entities/profile/profile.entity';
export interface UserLogin {
    id: number;
    profile: ProfileEntity;
    address: AddressEntity;
    profileId: string;
    name: string;
    surname: number;
    secondSurname: string;
    birthDate: Date;
    userName: string;
    email: string;
    token: string;
    enableOpenPay: string;
}
