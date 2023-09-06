import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
import { SubscriptionStatusEntity } from '../subscription-status/subscription-status.entity';
import { SubscriptionProductEntity } from '../subscription-products/subscription-product.entity';
import { OrderEntity } from '../order/order.entity';
import { OrderSubscriptionEntity } from '../order-subscription/order-subscription.entity';

@Table({
  tableName: 'app_t_108_subscriptions',
  updatedAt: false,
  createdAt: true,
})
export class SubscriptionEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'ID_USER', type: DataType.INTEGER({ length: 11 }) })
  userId: number;

  @ForeignKey(() => SubscriptionStatusEntity)
  @Column({
    field: 'ID_SUBSCRIPTION_STATUS',
    type: DataType.INTEGER({ length: 11 }),
  })
  subscriptionStatusId: number;

  @Column({ field: 'NAME', type: DataType.STRING(100) })
  name: string;

  @Column({ field: 'PERIOD', type: DataType.INTEGER({ length: 3 }) })
  period: number;

  @Column({ field: 'SUBTOTAL', type: DataType.DOUBLE(8, 2) })
  subtotal: number;

  @Column({ field: 'DISCOUNT', type: DataType.DOUBLE(8, 2) })
  discount: number;

  @Column({ field: 'TOTAL', type: DataType.DOUBLE(8, 2) })
  total: number;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;

  @Column({ field: 'NEXT_DELIVERY', type: DataType.DATE })
  nextDelivery: Date;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => SubscriptionStatusEntity)
  subscriptionStatus: SubscriptionStatusEntity;

  @Column({ type: DataType.VIRTUAL })
  products: SubscriptionProductEntity[];

  @BelongsToMany(() => OrderEntity, {
    through: { model: () => OrderSubscriptionEntity },
    foreignKey: 'subscriptionId',
  })
  orders: OrderEntity[];
}
