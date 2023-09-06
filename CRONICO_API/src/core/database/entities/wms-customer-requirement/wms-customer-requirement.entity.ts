import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'map_t_151_customer_requirement',
  timestamps: false,
})
export class WmsCustomerRequirementEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    field: 'ID_CUSTOMER_REQUIREMENT',
    type: DataType.INTEGER({ length: 11 }),
  })
  customerRequirementId: number;

  @Column({ field: 'ID_CUSTOMER', type: DataType.INTEGER({ length: 11 }) })
  customerId: number;

  @Column({ field: 'REQUIRED_DATE', type: DataType.DATE })
  requiredDate: Date;

  @Column({
    field: 'ID_REMISSIONS_STATUS',
    type: DataType.INTEGER({ length: 11 }),
  })
  remissionsStatus: number;

  @Column({ field: 'FOLIO', type: DataType.INTEGER({ length: 11 }) })
  folio: number;

  @Column({ field: 'PRIORITY', type: DataType.INTEGER({ length: 11 }) })
  priority: number;

  @Column({ field: 'CREATION_DATE', type: DataType.DATE })
  creationDate: Date;

  @Column({ field: 'TYPE', type: DataType.INTEGER({ length: 11 }) })
  type: number;
}
