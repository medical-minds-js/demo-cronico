import { User } from 'src/modules/users/interfaces/user.interface';
import { MailConfigService } from './mail-config/mail-config.service';
export declare class SendEmailService {
    private mailConfigService;
    constructor(mailConfigService: MailConfigService);
    sendWelcomeMail(user: User): Promise<void>;
    sendConfirmOrderMail(newOrder: any): Promise<void>;
}
