import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { ProductImageEntity } from 'src/core/database/entities/product-images/product-images.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { SaleEntity } from 'src/core/database/entities/sales/sale.entity';

export interface ProductInterface {
  id: number;
  supplyId: number;
  name: string;
  description: string;
  piecesPerBox: number;
  price: number;
  supplying: number;
  productType: number;
  createdAt: Date;
  sales: SaleEntity[];
  ailments: AilmentEntity[];
  items: ProductEntity[];
  images: ProductImageEntity[];
}
