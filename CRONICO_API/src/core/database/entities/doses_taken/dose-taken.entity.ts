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
import { SubscriptionProductEntity } from '../subscription-products/subscription-product.entity';

@Table({
  tableName: 'app_t_300_doses_taken',
  timestamps: false,
})
export class DoseTakenEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => SubscriptionProductEntity)
  @Column({
    field: 'ID_SUBSCRIPTION_PRODUCT',
    type: DataType.INTEGER({ length: 11 }),
  })
  subscriptionProductId: number;

  @Column({ field: 'DOSE_DATE', type: DataType.DATE })
  doseDate: Date;

  @Column({ field: 'STATUS', type: DataType.INTEGER({ length: 1 }) })
  status: number;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      this.getDataValue('status') === 1 ? 'Tomada' : 'No tomada';
    },
  })
  statusName: string;

  @BelongsTo(() => SubscriptionProductEntity)
  userAilmentsProduct: SubscriptionProductEntity;
}
