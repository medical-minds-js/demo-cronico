import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { AilmentsFilters } from './interfaces/ailments-filters';
export declare class AilmentsService {
    private readonly ailmentRepository;
    viewAll(filters: AilmentsFilters): Promise<AilmentEntity[]>;
    viewById(id: number): Promise<AilmentEntity>;
}
