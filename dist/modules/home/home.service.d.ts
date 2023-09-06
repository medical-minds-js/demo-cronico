import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';
export declare class HomeService {
    private readonly homeRepository;
    getHomeVideo(): Promise<any>;
    getAboutUs(): Promise<any>;
    getBenefits(): Promise<any[]>;
    getSocialCause(): Promise<any>;
    getTestimonials(): Promise<any[]>;
    createRequestSupply(data: SupplyRequestEntity): Promise<SupplyRequestEntity>;
}
