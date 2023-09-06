import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
export declare class CardsRepositoryService {
    private readonly cardsRepository;
    constructor(cardsRepository: typeof CardEntity);
    findCardsByUser(userId: number): Promise<CardEntity[]>;
    findActiveCardsByUser(userId: number): Promise<CardEntity>;
    saveCardByUser(data: CardEntity): Promise<CardEntity>;
    disableAllCardsByUser(userId: number): Promise<[affectedCount: number]>;
    setDefaultCardByUser(id: number): Promise<[affectedCount: number]>;
}
