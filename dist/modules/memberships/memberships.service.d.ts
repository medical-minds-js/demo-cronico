import { MembershipsEntity } from 'src/core/database/entities/memberships/memberships-entity';
export declare class MembershipsService {
    private readonly membershipsRepositoryService;
    getSelectedMemberships(): Promise<MembershipsEntity[]>;
    getMembershipsByIds(ids: number[]): Promise<MembershipsEntity[]>;
    getById(id: number): Promise<MembershipsEntity>;
    getGiftMemberships(): Promise<MembershipsEntity>;
    increseDelievered(id: number): Promise<void>;
}
