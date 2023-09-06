import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { AddressEntity } from '../address/address.entity';
import { AddressDeliveryTimeEntity } from '../address-deliveries-times/address-deliveries-times.entity';

@Table({
  tableName: 'app_t_006_delivery_times',
  timestamps: false,
})
export class DeliveryTimeEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @Column({ field: 'NAME', type: DataType.STRING })
  name: string;

  @Column({
    field: 'START_TIME',
    type: DataType.TIME,
  })
  startTime: Date;

  @Column({
    field: 'END_TIME',
    type: DataType.TIME,
  })
  endTime: Date;

  @Column({
    field: 'ACTIVE',
    type: DataType.INTEGER,
  })
  status: number;

  @BelongsToMany(() => AddressEntity, {
    through: { model: () => AddressDeliveryTimeEntity },
    foreignKey: 'deliveryTimeId',
  })
  address: AddressEntity[];
}
