import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';

@Table({
  tableName: 'app_t_003_order_status',
  createdAt: false,
  updatedAt: false,
})
export class OrderStatusEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @Column({ field: 'NAME', type: DataType.STRING })
  name: string;

  @HasMany(() => OrderEntity)
  orders: OrderEntity[];
}
