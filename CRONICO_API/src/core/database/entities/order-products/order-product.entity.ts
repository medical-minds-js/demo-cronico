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
} from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';
import { OrderProductStatusEntity } from '../order-product-status/order-product-status.entity';

@Table({
  tableName: 'app_t_103_order_products',
  updatedAt: false,
})
export class OrderProductEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @Column({
    field: 'ID_PRODUCT',
    type: DataType.INTEGER({ length: 11 }),
  })
  productId: number;

  @ForeignKey(() => OrderEntity)
  @Column({
    field: 'ID_ORDER',
    type: DataType.INTEGER({ length: 11 }),
  })
  orderId: number;

  @Column({
    field: 'ID_SUBSCRIPTION',
    type: DataType.INTEGER({ length: 11 }),
  })
  subscriptionId: number;

  @Column({
    field: 'ID_SALE',
    type: DataType.INTEGER({ length: 11 }),
  })
  saleId: number;

  @ForeignKey(() => OrderProductStatusEntity)
  @Column({
    field: 'ID_STATUS',
    type: DataType.INTEGER({ length: 11 }),
  })
  statusId: number;

  @Column({
    field: 'F_IdLote',
    type: DataType.INTEGER({ length: 11 }),
  })
  loteId: number;

  @Column({ field: 'BATCH_CODE', type: DataType.STRING(50) })
  batchCode: number;

  @Column({ field: 'EXPIRATION_DATE', type: DataType.DATEONLY })
  expirationDate: number;

  @Column({ field: 'PIECES', type: DataType.INTEGER({ length: 11 }) })
  pieces: number;

  @Column({ field: 'PRICE', type: DataType.DOUBLE(8, 2) })
  price: number;

  @Column({ field: 'SUBTOTAL', type: DataType.DOUBLE(8, 2) })
  subtotal: number;

  @Column({ field: 'DISCOUNT', type: DataType.DOUBLE(8, 2) })
  discount: number;

  @Column({ field: 'TOTAL', type: DataType.DOUBLE(8, 2) })
  total: number;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;

  @BelongsTo(() => OrderEntity)
  order: OrderEntity;

  @BelongsTo(() => OrderProductStatusEntity)
  status: OrderProductStatusEntity;
}
