import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { UserAilmentsEntity } from '../user-ailments/user-ailments.entity';
import { ProductEntity } from '../product/product.entity';
import { DoseTakenEntity } from '../doses_taken/dose-taken.entity';

@Table({
  tableName: 'app_t_214_user_ailments_products',
  timestamps: false,
})
export class UserAilmentsProductEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserAilmentsEntity)
  @Column({ field: 'ID_USER_AILMENTS', type: DataType.INTEGER({ length: 11 }) })
  userAilmentsId: number;

  @ForeignKey(() => ProductEntity)
  @Column({ field: 'ID_PRODUCT', type: DataType.INTEGER({ length: 11 }) })
  productId: number;

  @Column({ field: 'DOSE', type: DataType.DOUBLE(6, 1) })
  dose: number;

  @Column({ field: 'INITIAL_DATE', type: DataType.DOUBLE(6, 1) })
  initialDate: number;

  @Column({ field: 'INTAKE_PERIOD', type: DataType.TIME })
  intakePeriod: Date;

  @Column({ field: 'FIRST_TAKE', type: DataType.TIME })
  firstTake: Date;

  @BelongsTo(() => UserAilmentsEntity)
  userAilments: UserAilmentsEntity;

  @BelongsTo(() => ProductEntity)
  product: ProductEntity;
}
