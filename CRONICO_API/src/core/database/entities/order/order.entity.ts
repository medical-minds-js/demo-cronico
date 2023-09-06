import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  BelongsTo,
  ForeignKey,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';

import { OrderStatusEntity } from '../order-status/order-status.entity';
import { UserEntity } from '../user/user.entity';
import { CardEntity } from '../cards/cards.entity';
import { OrderProductEntity } from '../order-products/order-product.entity';
import { SubscriptionEntity } from '../subscription/subscription.entity';
import { OrderSubscriptionEntity } from '../order-subscription/order-subscription.entity';

@Table({
  tableName: 'app_t_102_orders',
  updatedAt: false,
})
export class OrderEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => OrderStatusEntity)
  @Column({
    field: 'ID_ORDER_STATUS',
    type: DataType.INTEGER({ length: 11 }),
  })
  orderStatusId: number;

  @ForeignKey(() => UserEntity)
  @Column({
    field: 'ID_USER',
    type: DataType.INTEGER({ length: 11 }),
  })
  userId: number;

  @ForeignKey(() => CardEntity)
  @Column({
    field: 'ID_CARD',
    type: DataType.INTEGER({ length: 11 }),
  })
  cardId: number;

  @Column({ field: 'NAME', type: DataType.STRING(100) })
  name: string;

  @Column({
    field: 'TOTAL',
    type: DataType.DOUBLE(8, 2),
  })
  total: number;

  @Column({ field: 'STREET', type: DataType.STRING(255) })
  street: string;

  @Column({ field: 'STREET_NUMBER', type: DataType.STRING(50) })
  streetNumber: number;

  @Column({ field: 'SUBURB', type: DataType.STRING(255) })
  suburb: string;

  @Column({ field: 'CP', type: DataType.INTEGER({ length: 11 }) })
  cp: number;

  @Column({ field: 'LOCATION', type: DataType.STRING(255) })
  location: string;

  @Column({ field: 'STATE', type: DataType.STRING })
  state: string;

  @Column({ field: 'COMMENTS', type: DataType.STRING(255) })
  comments: string;

  @Column({ field: 'REFERENCE', type: DataType.STRING(255) })
  reference: string;

  @Column({
    field: 'START_TIME',
    type: DataType.TIME,
  })
  startTime: Date;

  @Column({
    field: 'END_TIME',
    type: DataType.TIME,
  })
  endTime: Date;
  @Column({
    field: 'RANGE_TIMES',
    type: DataType.STRING(100),
  })
  rangeTimes: string;

  @Column({
    field: 'DELIVERY_DATE',
    type: DataType.DATE,
  })
  deliveryDate: Date;

  @Column({
    field: 'WHO_RECEIVES',
    type: DataType.STRING(255),
  })
  whoReceives: string;

  @Column({
    field: 'RELATIONSHIP',
    type: DataType.STRING(255),
  })
  relationShip: string;

  @Column({
    field: 'VISITS',
    type: DataType.INTEGER({ length: 3 }),
  })
  visits: number;

  @Column({
    field: 'PAYMENT_ID',
    type: DataType.STRING(200),
  })
  paymentId: string;

  @Column({
    field: 'PAYMENT_CODE',
    type: DataType.STRING(200),
  })
  paymentCode: string;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;

  @BelongsToMany(() => SubscriptionEntity, {
    through: { model: () => OrderSubscriptionEntity },
    foreignKey: 'orderId',
  })
  subscriptions: SubscriptionEntity[];

  @BelongsTo(() => OrderStatusEntity)
  orderStatus: OrderStatusEntity;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => CardEntity)
  card: CardEntity;

  @HasMany(() => OrderProductEntity)
  orderProducts: OrderProductEntity[];
}
