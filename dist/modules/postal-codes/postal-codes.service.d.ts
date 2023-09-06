import { PostalCodeEntity } from 'src/core/database/entities/postal-codes/postal-code.entity';
export declare class PostalCodesService {
    private readonly pcRepository;
    getAll(code: number): Promise<PostalCodeEntity[]>;
}
