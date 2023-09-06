import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsToMany,
  CreatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
import { DeliveryTimeEntity } from '../deliveries-times/deliveries-times.entity';
import { AddressDeliveryTimeEntity } from '../address-deliveries-times/address-deliveries-times.entity';

@Table({
  tableName: 'app_t_202_address',
  updatedAt: false,
  paranoid: true,
})
export class AddressEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'ID_USER', type: DataType.INTEGER({ length: 11 }) })
  userId: number;

  @Column({ field: 'NAME', type: DataType.STRING })
  name: string;

  @Column({ field: 'STREET', type: DataType.STRING })
  street: string;

  @Column({ field: 'STREET_NUMBER', type: DataType.STRING })
  streetNumber: string;

  @Column({ field: 'INTERIOR_NUMBER', type: DataType.STRING })
  interiorNumber: string;

  @Column({ field: 'SUBURB', type: DataType.STRING })
  suburb: string;

  @Column({ field: 'CP', type: DataType.INTEGER })
  cp: number;

  @Column({ field: 'LOCATION', type: DataType.STRING })
  location: string;

  @Column({ field: 'COMMENTS', type: DataType.STRING })
  comments: string;

  @Column({ field: 'STATE', type: DataType.STRING })
  state: string;

  @Column({ field: 'REFERENCE', type: DataType.STRING })
  reference: string;

  @Column({ field: 'STATUS', type: DataType.INTEGER })
  status: number;

  @CreatedAt
  @Column({ field: 'CREATED_AT', type: DataType.DATE })
  cretedAt: number;

  @DeletedAt
  @Column({ field: 'DELETE_AT', type: DataType.DATE })
  deletedAt: number;

  @BelongsToMany(() => DeliveryTimeEntity, {
    through: { model: () => AddressDeliveryTimeEntity },
    foreignKey: 'addressId',
  })
  deliveryTimes: DeliveryTimeEntity[];
}
