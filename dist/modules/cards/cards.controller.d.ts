import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { CreateCardDto } from './interfaces/create-card.dto.interface';
export declare class CardsController {
    private readonly cardsService;
    cardsByUser(req: any): Promise<SuccessListResponse>;
    createCard(req: any, card: CreateCardDto): Promise<SuccessListResponse>;
    setDefaultCardByUser(req: any, params: any): Promise<SuccessListResponse>;
}
