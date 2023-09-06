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
  tableName: 'app_t_205_product_images',
  createdAt: false,
  updatedAt: false,
})
export class ProductImageEntity extends Model {
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
    field: 'URL',
    type: DataType.STRING(250),
  })
  url: string;

  @BelongsTo(() => ProductEntity, 'productId')
  images: ProductEntity;
}
