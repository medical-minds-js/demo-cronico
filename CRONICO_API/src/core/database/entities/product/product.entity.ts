import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  HasMany,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import { SaleEntity } from '../sales/sale.entity';
import { AilmentEntity } from '../ailments/ailment.entity';
import { SupplyEntity } from '../supplies/supply.entity';
import { ProductPartEntity } from '../product-parts/product-parts.entity';
import { ProductImageEntity } from '../product-images/product-images.entity';
import { ShoppingCartEntity } from '../shopping-carts/shopping-cart.entity';
import { ProductAilmentsEntity } from '../product-ailments/product-ailments.entity';
import { UserAilmentsProductEntity } from '../user-ailments-product/user-ailments-product.entity';

@Table({
  tableName: 'app_t_107_products',
  createdAt: false,
  updatedAt: false,
})
export class ProductEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => SupplyEntity)
  @Column({
    field: 'ID_SUPPLY',
    type: DataType.INTEGER,
  })
  supplyId: number;

  @Column({
    field: 'NAME',
    type: DataType.STRING,
  })
  name: string;

  @Column({
    field: 'DESCRIPTION',
    type: DataType.STRING,
  })
  description: string;

  @Column({
    field: 'PRESENTATION',
    type: DataType.INTEGER,
  })
  presentation: number;

  @Column({
    field: 'PRICE',
    type: DataType.DOUBLE,
  })
  price: number;

  @Column({
    field: 'PRODUCT_TYPE',
    type: DataType.INTEGER,
  })
  productType: number;

  @CreatedAt
  @Column({ field: 'CREATED_AT', type: DataType.DATE })
  createdAt: Date;

  @HasMany(() => SaleEntity)
  sales: SaleEntity[];

  @BelongsToMany(() => AilmentEntity, {
    through: { model: () => ProductAilmentsEntity },
    foreignKey: 'productId',
  })
  ailments: AilmentEntity[];

  @BelongsTo(() => SupplyEntity)
  supply: SupplyEntity;

  @HasMany(() => ProductPartEntity)
  productParts: ProductPartEntity[];

  @HasMany(() => ProductImageEntity)
  images: ProductImageEntity[];

  @HasMany(() => ShoppingCartEntity)
  shoppings: ShoppingCartEntity[];

  @HasMany(() => UserAilmentsProductEntity)
  userAilmentsProducts: UserAilmentsProductEntity[];

  products: ProductEntity[];

  searchType = 1;
}
