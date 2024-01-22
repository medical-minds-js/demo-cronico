import { MembershipsEntity } from 'src/core/database/entities/memberships/memberships-entity';
export declare class MembershipsRepositoryService {
    private readonly membershipsRepository;
    constructor(membershipsRepository: typeof MembershipsEntity);
    getSelectedMemberships(): Promise<MembershipsEntity[]>;
    getByIds(ids: number[]): Promise<MembershipsEntity[]>;
    getById(id: number): Promise<MembershipsEntity>;
}
