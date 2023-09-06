import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { AddressEntity } from '../address/address.entity';
import { DeliveryTimeEntity } from '../deliveries-times/deliveries-times.entity';

@Table({
  tableName: 'app_t_212_address_delivery_times',
  timestamps: false,
})
export class AddressDeliveryTimeEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @ForeignKey(() => AddressEntity)
  @Column({
    field: 'ID_ADDRESS',
    type: DataType.INTEGER({ length: 11 }),
  })
  addressId: number;

  @ForeignKey(() => DeliveryTimeEntity)
  @Column({
    field: 'ID_DELIVERY_TIME',
    type: DataType.INTEGER({ length: 11 }),
  })
  deliveryTimeId: number;

  deliveryTime: DeliveryTimeEntity;
}
