import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { UserEntity } from '../user/user.entity';

@Table({
  tableName: 'app_t_104_shopping_cart',
  createdAt: true,
  updatedAt: false,
})
export class ShoppingCartEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'ID_USER', type: DataType.INTEGER({ length: 11 }) })
  userId: number;

  @ForeignKey(() => ProductEntity)
  @Column({ field: 'ID_PRODUCT', type: DataType.INTEGER({ length: 11 }) })
  productId: number;

  @Column({ field: 'PERIOD', type: DataType.INTEGER({ length: 3 }) })
  period: number;

  @Column({ field: 'DOSE', type: DataType.DOUBLE(6, 1) })
  dose: number;

  @Column({ field: 'PIECES', type: DataType.INTEGER({ length: 4 }) })
  pieces: number;

  @Column({ field: 'SUBTOTAL', type: DataType.DOUBLE(8, 2) })
  subtotal: number;

  @Column({ field: 'DISCOUNT', type: DataType.DOUBLE(8, 2) })
  discount: number;

  @Column({ field: 'TOTAL', type: DataType.DOUBLE(8, 2) })
  total: number;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;

  @BelongsTo(() => ProductEntity, 'productId')
  product: ProductEntity;
}
