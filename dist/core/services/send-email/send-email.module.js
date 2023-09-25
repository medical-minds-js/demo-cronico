"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailModule = void 0;
const common_1 = require("@nestjs/common");
const mail_config_service_1 = require("./mail-config/mail-config.service");
const send_email_service_1 = require("./send-email.service");
let SendEmailModule = class SendEmailModule {
};
SendEmailModule = __decorate([
    (0, common_1.Module)({
        providers: [mail_config_service_1.MailConfigService, send_email_service_1.SendEmailService],
        exports: [mail_config_service_1.MailConfigService, send_email_service_1.SendEmailService],
    })
], SendEmailModule);
exports.SendEmailModule = SendEmailModule;
//# sourceMappingURL=send-email.module.js.map