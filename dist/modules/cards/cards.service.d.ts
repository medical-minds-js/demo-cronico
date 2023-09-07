import { CreateCardDto } from './interfaces/create-card.dto.interface';
export declare class CardsService {
    private readonly cardsRepositoryService;
    private readonly usersService;
    private readonly openPayService;
    getCardsByUser(userId: number): Promise<{
        active: number;
        id: number;
        card_number: string;
        holder_name: string;
        expiration_year: string;
        expiration_month: string;
        bank_name: string;
        bank_code: string;
        type: string;
        brand: string;
    }[]>;
    getActiveByUser(userId: number): Promise<import("../../core/database/entities/cards/cards.entity").CardEntity>;
    saveCardByUser(userId: number, card: CreateCardDto): Promise<string>;
    setDefaultCardByUser(userId: number, cardId: number): Promise<string>;
}
