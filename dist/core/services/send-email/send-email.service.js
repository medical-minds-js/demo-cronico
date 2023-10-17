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
const date_parse_1 = require("../../utils/date.parse");
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
                subject: '!Bienvenido(a) a Meditrust!',
                html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                  </head>
                  <body>
                    <h2>Hola ${user.name}</h2>
                    <p><b>¡Bienvenido a Meditrust!</b><br>Ahora estás un paso más cerca de mejorar tu calidad de vida.
                    ¡Gracias por confiar en nuestro servicio!
                    <br>Síguenos en nuestras redes
                    <a href ="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                    <a href ="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href ="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                    y recomienda nuestro servicio.
                    <br>
                    Recuerda que tu código para recomendación es XXXXXX y por cada usuario que invites,
                    recibirás el 10% de descuento en tu siguiente pedido y él o ella recibirán el 10% de descuento en su primer pedido.<br>
                    Para cualquier duda o sugerencia nos puedes contactar aquí.
                    <a href ="https://instagram.com/"><i class="fas fa-phone"></i></a>
                    <a href ="https://instagram.com/"><i class="fab fa-whatsapp"></i></a> </p>
                    <p>Saludos</p>
                  </body>
                </html>
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
            const nextDelivery = new Date();
            nextDelivery.setDate(nextDelivery.getDate() + newOrder.orderProducts[0].period);
            const transporter = this.mailConfigService.createTransport();
            const info = await transporter.sendMail({
                to: newOrder.user.email,
                from: send_email_config_1.configEmail.email.user,
                subject: 'Compra realizada en Medi Trust',
                html: `<h2>Hola ${newOrder.user.name}</h2>
            <p>Tu pedido se ha realizado con éxito.<br>
            Tu fecha de entrega es ${(0, date_parse_1.dateToRead)(new Date(newOrder.deliveryDate))} y estarás recibiendo tu pedido de forma quincenal/mensual. <br>
            Si deseas cancelar tu pedido haz clic aquí (botón).
            <br>Podrás modificar o cancelar tu siguiente pedido antes de ${(0, date_parse_1.dateToRead)(new Date(nextDelivery))}.
            <br>Para cualquier duda o sugerencia nos puedes contactar aquí (botón de correo al Call Center y Botón de Whatsapp).
            <br>¡Gracias por confiar en nuestro servicio! (Botones de Redes Sociales)
            </p>
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