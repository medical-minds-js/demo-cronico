"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConfigService = void 0;
const nodemailer_1 = require("nodemailer");
const send_email_config_1 = require("../send-email.config");
class MailConfigService {
    createTransport() {
        const { host, port, user, pass, enableSecure } = {
            host: send_email_config_1.configEmail.email.host,
            port: send_email_config_1.configEmail.email.port,
            enableSecure: send_email_config_1.configEmail.email.enableSecure,
            user: send_email_config_1.configEmail.email.user,
            pass: send_email_config_1.configEmail.email.pass,
        };
        return (0, nodemailer_1.createTransport)({
            host,
            port,
            secure: enableSecure,
            auth: {
                user,
                pass,
            },
        });
    }
}
exports.MailConfigService = MailConfigService;
//# sourceMappingURL=mail-config.service.js.map