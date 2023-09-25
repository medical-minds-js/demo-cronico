import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { ProductFilters } from './interfaces/product-filters';
import { SearchItem } from './interfaces/search-interface';
import { ProductImageEntity } from 'src/core/database/entities/product-images/product-images.entity';
import { PaginatedList } from 'src/core/interfaces/paginated-list.interface';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
export declare class ProductsService {
    private readonly productRepository;
    getHomePrincipalProduct(): Promise<any>;
    getNewProducts(): Promise<any[]>;
    getHomePrincipalPackage(): Promise<any>;
    getProducts(filters: ProductFilters): Promise<PaginatedList<SearchItem>>;
    getProductById(id: number): Promise<ProductEntity>;
    getAilmentById(id: number): Promise<AilmentEntity>;
    viewProductByIds(ids: number[]): Promise<ProductEntity[]>;
    viewImagesByIds(ids: number[]): Promise<ProductImageEntity[]>;
}
