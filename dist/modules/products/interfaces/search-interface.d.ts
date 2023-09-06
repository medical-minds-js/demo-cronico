import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
export interface SearchInterface {
    products: ProductEntity[];
    ailments: AilmentEntity[];
    totalPages: number;
}
export interface SearchItem {
    type: 1 | 2;
    product: ProductEntity;
    ailments: AilmentEntity;
}
export interface SearchDbItem {
    id: number;
    type: 1 | 2;
}
