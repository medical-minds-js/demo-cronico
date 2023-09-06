import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { OrderProductEntity } from '../order-products/order-product.entity';

@Table({
  tableName: 'app_t_004_order_products_status',
  timestamps: false,
})
export class OrderProductStatusEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @Column({ field: 'NAME', type: DataType.STRING(45) })
  name: string;

  @HasMany(() => OrderProductEntity)
  orderProducts: OrderProductEntity[];
}
