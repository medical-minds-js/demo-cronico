import { User } from 'src/modules/users/interfaces/user.interface';
import { UserLogin } from '../auth/interface/user-login.interface';

export function UserMapper(user): User {
  return {
    id: user.id,
    profile: user.profile,
    address: user.address,
    profileId: user.profileId,
    name: user.name,
    surname: user.surname,
    secondSurname: user.secondSurname,
    birthDate: user.birthDate,
    userName: user.userName,
    email: user.email,
    picture: user.picture,
    enableOpenPay: user.enableOpenPay,
  };
}

export function UserLoginMapper(user, token): UserLogin {
  return {
    id: user.id,
    profile: user.profile,
    address: user.address,
    profileId: user.profileId,
    name: user.name,
    surname: user.surname,
    secondSurname: user.secondSurname,
    birthDate: user.birthDate,
    userName: user.userName,
    email: user.email,
    enableOpenPay: user.enableOpenPay,
    token,
  };
}
