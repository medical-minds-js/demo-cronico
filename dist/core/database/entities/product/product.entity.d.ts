import { Model } from 'sequelize-typescript';
import { SaleEntity } from '../sales/sale.entity';
import { AilmentEntity } from '../ailments/ailment.entity';
import { SupplyEntity } from '../supplies/supply.entity';
import { ProductPartEntity } from '../product-parts/product-parts.entity';
import { ProductImageEntity } from '../product-images/product-images.entity';
import { ShoppingCartEntity } from '../shopping-carts/shopping-cart.entity';
import { UserAilmentsProductEntity } from '../user-ailments-product/user-ailments-product.entity';
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
    supply: SupplyEntity;
    productParts: ProductPartEntity[];
    images: ProductImageEntity[];
    shoppings: ShoppingCartEntity[];
    userAilmentsProducts: UserAilmentsProductEntity[];
    products: ProductEntity[];
    searchType: number;
}
