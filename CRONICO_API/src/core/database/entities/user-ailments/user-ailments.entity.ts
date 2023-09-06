import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { AilmentEntity } from '../ailments/ailment.entity';
import { UserEntity } from '../user/user.entity';
import { UserAilmentsProductEntity } from '../user-ailments-product/user-ailments-product.entity';

@Table({
  tableName: 'app_t_210_user_ailments',
  timestamps: false,
})
export class UserAilmentsEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'ID_USER', type: DataType.INTEGER({ length: 11 }) })
  userId: number;

  @ForeignKey(() => AilmentEntity)
  @Column({ field: 'ID_AILMENTS', type: DataType.INTEGER({ length: 11 }) })
  ailmentsId: number;

  @HasMany(() => UserAilmentsProductEntity)
  userAilmentsProducts: UserAilmentsProductEntity[];
}
