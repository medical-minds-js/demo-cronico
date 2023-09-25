"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailService = void 0;
const common_1 = require("@nestjs/common");
const send_email_config_1 = require("./send-email.config");
const mail_config_service_1 = require("./mail-config/mail-config.service");
let SendEmailService = class SendEmailService {
    constructor(mailConfigService) {
        this.mailConfigService = mailConfigService;
    }
    async sendWelcomeMail(user) {
        try {
            const transporter = this.mailConfigService.createTransport();
            const info = await transporter.sendMail({
                to: user.email,
                from: send_email_config_1.configEmail.email.user,
                subject: 'Registro Medi Trust',
                html: `<p>Hola ${user.name}</p>
            <p>Agradecemos tu preferencia al haberte registrado exitosamente en la plataforma de Medi Trust</p>
            <p>Saludos</p>
`,
            });
            console.log(info);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async sendConfirmOrderMail(newOrder) {
        try {
            const transporter = this.mailConfigService.createTransport();
            const info = await transporter.sendMail({
                to: newOrder.user.email,
                from: send_email_config_1.configEmail.email.user,
                subject: 'Compra realizada en Medi Trust',
                html: `<p>Hola ${newOrder.user.name}</p>
            <p>El su orden se ha realizado con exito</p>
            <p>Saludos</p>
`,
            });
            console.log(info);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
};
SendEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mail_config_service_1.MailConfigService])
], SendEmailService);
exports.SendEmailService = SendEmailService;
//# sourceMappingURL=send-email.service.js.map