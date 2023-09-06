import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  ForeignKey,
} from 'sequelize-typescript';

import { SubscriptionEntity } from '../subscription/subscription.entity';
import { OrderEntity } from '../order/order.entity';
@Table({
  tableName: 'app_t_213_orders_subscriptions',
  timestamps: false,
})
export class OrderSubscriptionEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => SubscriptionEntity)
  @Column({
    field: 'ID_SUBSCRIPTION',
    type: DataType.INTEGER({ length: 11 }),
  })
  subscriptionId: number;

  @ForeignKey(() => OrderEntity)
  @Column({
    field: 'ID_ORDER',
    type: DataType.INTEGER({ length: 11 }),
  })
  orderId: number;

  order: OrderEntity;
}
