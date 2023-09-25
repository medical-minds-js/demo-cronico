import { User } from 'src/modules/users/interfaces/user.interface';
import { MailConfigService } from './mail-config/mail-config.service';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
export declare class SendEmailService {
    private mailConfigService;
    constructor(mailConfigService: MailConfigService);
    sendWelcomeMail(user: User): Promise<void>;
    sendConfirmOrderMail(newOrder: OrderEntity): Promise<void>;
}
