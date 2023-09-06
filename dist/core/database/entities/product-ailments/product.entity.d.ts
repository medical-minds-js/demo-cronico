import { Model } from 'sequelize-typescript';
import { SaleEntity } from '../sales/sale.entity';
import { AilmentEntity } from '../ailments/ailment.entity';
import { ProductPartEntity } from '../product-parts/product-parts.entity';
import { ProductImageEntity } from '../product-images/product-images.entity';
import { ShoppingCartEntity } from '../shopping-carts/shopping-cart.entity';
export declare class ProductEntity extends Model {
    id: number;
    supplyId: number;
    name: string;
    description: string;
    presentation: number;
    price: number;
    productType: number;
    createdAt: Date;
    sales: SaleEntity[];
    ailments: AilmentEntity[];
    productParts: ProductPartEntity[];
    images: ProductImageEntity[];
    shoppings: ShoppingCartEntity[];
    products: ProductEntity[];
}
