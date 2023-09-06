import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';

@Table({
  tableName: 'app_t_204_sales',
  createdAt: false,
  updatedAt: false,
})
export class SaleEntity extends Model {
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
    field: 'PERCENT',
    type: DataType.INTEGER({ length: 3 }),
  })
  percent: number;

  @Column({
    field: 'DESCRIPTION',
    type: DataType.TEXT,
  })
  description: string;

  @BelongsTo(() => ProductEntity, 'productId')
  product: ProductEntity;
}
