import { PostalCodeEntity } from 'src/core/database/entities/postal-codes/postal-code.entity';
export declare class PostalCodesRepositoryService {
    private readonly postalCodeRepository;
    constructor(postalCodeRepository: typeof PostalCodeEntity);
    listAll(code: number): Promise<PostalCodeEntity[]>;
}
