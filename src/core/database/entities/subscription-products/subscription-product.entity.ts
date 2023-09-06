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
  HasMany,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { SaleEntity } from '../sales/sale.entity';
import { SubscriptionEntity } from '../subscription/subscription.entity';
import { SubscriptionProductStatusEntity } from '../subscription-product-status/subscription-product-status.entity';
import { DoseTakenEntity } from '../doses_taken/dose-taken.entity';

@Table({
  tableName: 'app_t_110_subscription_products',
  updatedAt: false,
  createdAt: true,
})
export class SubscriptionProductEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => SubscriptionEntity)
  @Column({ field: 'ID_SUBSCRIPTION', type: DataType.INTEGER({ length: 11 }) })
  subscriptionId: number;

  @ForeignKey(() => SubscriptionProductStatusEntity)
  @Column({ field: 'ID_STATUS', type: DataType.INTEGER({ length: 11 }) })
  statusId: number;

  @ForeignKey(() => ProductEntity)
  @Column({ field: 'ID_PRODUCT', type: DataType.INTEGER({ length: 11 }) })
  productId: number;

  @ForeignKey(() => SaleEntity)
  @Column({ field: 'ID_SALE', type: DataType.INTEGER({ length: 11 }) })
  saleId: number;

  @Column({ field: 'PERIOD', type: DataType.INTEGER({ length: 3 }) })
  period: number;

  @Column({ field: 'DOSE', type: DataType.DOUBLE(6, 1) })
  dose: number;

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

  @Column({ field: 'TAKE_DOSE', type: DataType.DOUBLE(6, 1) })
  takeDose: number;

  @Column({ field: 'INITIAL_TAKE', type: DataType.DATE })
  initialTake: Date;

  @Column({ field: 'INTAKE_PERIOD', type: DataType.TIME })
  intakePeriod: Date;

  @Column({ field: 'FIRST_TAKE', type: DataType.TIME })
  firstTake: Date;

  @BelongsTo(() => ProductEntity)
  product: ProductEntity;

  @BelongsTo(() => SaleEntity)
  sale: SaleEntity;

  @BelongsTo(() => SubscriptionProductStatusEntity)
  status: SubscriptionProductStatusEntity;

  @HasMany(() => DoseTakenEntity)
  dosesTaken: DoseTakenEntity[];
}
