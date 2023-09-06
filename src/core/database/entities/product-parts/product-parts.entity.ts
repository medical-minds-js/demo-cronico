import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';

@Table({
  tableName: 'app_t_206_product_parts',
  createdAt: false,
  updatedAt: false,
})
export class ProductPartEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => ProductEntity)
  @Column({
    field: 'ID_PRODUCT',
    type: DataType.INTEGER({ length: 11 }),
  })
  productId: number;

  @Column({
    field: 'ID_PRODUCT_PART',
    type: DataType.INTEGER({ length: 11 }),
  })
  productPartId: number;

  @BelongsTo(() => ProductEntity, 'productId')
  productParts: ProductEntity;
}
