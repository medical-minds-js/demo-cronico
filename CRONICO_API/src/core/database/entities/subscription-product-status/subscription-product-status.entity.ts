import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'app_t_010_subscription_products_status',
  updatedAt: false,
  createdAt: false,
})
export class SubscriptionProductStatusEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @Column({ field: 'NAME', type: DataType.STRING(45) })
  name: string;
}
