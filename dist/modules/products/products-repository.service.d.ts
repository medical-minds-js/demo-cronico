import { Sequelize } from 'sequelize';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { ProductImageEntity } from 'src/core/database/entities/product-images/product-images.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { SearchDbItem } from './interfaces/search-interface';
export declare class ProductsRepositoryService {
    private readonly productRepository;
    private readonly ailmentRepository;
    private readonly productImageRepository;
    private readonly conn;
    constructor(productRepository: typeof ProductEntity, ailmentRepository: typeof AilmentEntity, productImageRepository: typeof ProductImageEntity, conn: Sequelize);
    searchByText(text: string, page?: number, itemsPerPage?: number): Promise<SearchDbItem[]>;
    private generateQuerySearchByText;
    countSearchByText(text: string): Promise<number>;
    viewAilmentsByIdList(ailmentsIds: number[]): Promise<any[]>;
    viewProductsByIds(ids: number[]): Promise<ProductEntity[]>;
    viewPartProductsByIds(ids: number[]): Promise<ProductEntity[]>;
    findOneById(id: number): Promise<ProductEntity>;
    findAilmentById(id: number): Promise<AilmentEntity>;
    viewOneById(id: number): Promise<ProductEntity>;
    findLastProducts(): Promise<ProductEntity[]>;
    getImagesByIds(ids: any): Promise<ProductImageEntity[]>;
}
