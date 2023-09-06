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
} from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
import { OrderEntity } from '../order/order.entity';

@Table({
  tableName: 'app_t_201_cards',
  updatedAt: false,
})
export class CardEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'ID_USER', type: DataType.INTEGER({ length: 11 }) })
  userId: number;

  @Column({ field: 'ACTIVE', type: DataType.INTEGER({ length: 2 }) })
  active: number;

  @Column({ field: 'ID_CARD_OPENPAY', type: DataType.STRING(100) })
  cardOpenPayId: string;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @HasMany(() => OrderEntity)
  orders: OrderEntity;
}
