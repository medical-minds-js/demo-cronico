import { AddressEntity } from '../../../core/database/entities/address/address.entity';
import { ProfileEntity } from '../../../core/database/entities/profile/profile.entity';
export interface User {
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
    cellPhone: string;
    gender: number;
    statusInfo: number;
    haveTestimony: number;
    picture: string;
    enableOpenPay: string;
}
