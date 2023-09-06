import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProfileEntity } from '../profile/profile.entity';
import { AddressEntity } from '../address/address.entity';
import { OrderEntity } from '../order/order.entity';
import { CardEntity } from '../cards/cards.entity';
import { AilmentEntity } from '../ailments/ailment.entity';
import { UserAilmentsEntity } from '../user-ailments/user-ailments.entity';

@Table({
  tableName: 'app_t_101_users',
  updatedAt: false,
})
export class UserEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @Column({ field: 'ID_PROFILE', type: DataType.INTEGER({ length: 11 }) })
  profileId: string;

  @Column({ field: 'NAME', type: DataType.STRING(100) })
  name: string;

  @Column({ field: 'SURNAME', type: DataType.STRING(100) })
  surname: string;

  @Column({ field: 'SECOND_SURNAME', type: DataType.STRING(100) })
  secondSurname: string;

  @Column({ field: 'BIRTH_DATE', type: DataType.DATEONLY })
  birthDate: Date;

  @Column({ field: 'PICTURE', type: DataType.STRING(200) })
  picture: string;

  @Column({ field: 'USER_NAME', type: DataType.STRING(100) })
  userName: string;

  @Column({ field: 'EMAIL', type: DataType.STRING(100) })
  email: string;

  @Column({ field: 'PASS', type: DataType.STRING(200) })
  pass: string;

  @Column({ field: 'SALT', type: DataType.STRING(100) })
  salt: string;

  @Column({ field: 'ENABLE_OPENPAY', type: DataType.STRING(200) })
  enableOpenPay: string;

  @Column({ field: 'OPENPAY_ID', type: DataType.STRING(200) })
  openPayId: string;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;

  @BelongsTo(() => ProfileEntity, 'profileId')
  profile: ProfileEntity;

  @HasMany(() => AddressEntity)
  address: AddressEntity;

  @HasMany(() => OrderEntity)
  orders: OrderEntity;

  @HasMany(() => CardEntity)
  cards: CardEntity;

  @BelongsToMany(() => AilmentEntity, {
    through: { model: () => UserAilmentsEntity },

    foreignKey: 'userId',
  })
  ailments: AilmentEntity[];
}
