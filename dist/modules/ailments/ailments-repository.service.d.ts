import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { AilmentsFilters } from './interfaces/ailments-filters';
export declare class AilmentsRepositoryService {
    private readonly ailmentRepository;
    constructor(ailmentRepository: typeof AilmentEntity);
    getAll(data: AilmentsFilters): Promise<AilmentEntity[]>;
    getById(id: number): Promise<AilmentEntity>;
}
