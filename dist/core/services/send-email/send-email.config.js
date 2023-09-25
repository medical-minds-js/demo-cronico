"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEmail = void 0;
exports.configEmail = {
    email: {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        enableSecure: process.env.EMAIL_SECURE === 'true',
    },
};
//# sourceMappingURL=send-email.config.js.map