import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'map_t_152_customer_requirement_detail',
  timestamps: false,
})
export class WmsCustomerRequirementDetailEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    field: 'ID_CUSTOMER_REQUIREMENT_DETAIL',
    type: DataType.INTEGER({ length: 11 }),
  })
  customerRequirementDetailId: number;

  @Column({
    field: 'ID_CUSTOMER_REQUIREMENT',
    type: DataType.INTEGER({ length: 11 }),
  })
  customerRequirementId: number;

  @Column({ field: 'SHORT_KEY', type: DataType.STRING(25) })
  shortKey: string;

  @Column({
    field: 'QUANTITY',
    type: DataType.INTEGER({ length: 11 }),
  })
  quantity: number;

  @Column({
    field: 'QUANTITY_CONFIRMED',
    type: DataType.INTEGER({ length: 11 }),
  })
  quantityConfirmed: number;

  @Column({ field: 'STATUS', type: DataType.INTEGER({ length: 11 }) })
  status: number;

  @Column({ field: 'REMISSION_STATUS', type: DataType.INTEGER({ length: 3 }) })
  remissionStatus: number;

  @Column({ field: 'COMMENTS', type: DataType.STRING(255) })
  comments: number;
}
