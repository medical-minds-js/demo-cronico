import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
export declare class CardsRepositoryService {
    private readonly cardsRepository;
    constructor(cardsRepository: typeof CardEntity);
    findCardsByUser(userId: number): Promise<CardEntity[]>;
    findActiveCardsByUser(userId: number): Promise<CardEntity>;
}
