"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginMapper = exports.UserMapper = void 0;
function UserMapper(user) {
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
exports.UserMapper = UserMapper;
function UserLoginMapper(user, token) {
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
exports.UserLoginMapper = UserLoginMapper;
//# sourceMappingURL=user.utils.js.map