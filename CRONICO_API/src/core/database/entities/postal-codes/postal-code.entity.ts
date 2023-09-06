import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'app_t_009_postal_codes',
  createdAt: false,
  updatedAt: false,
})
export class PostalCodeEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @Column({ field: 'POSTAL_CODE', type: DataType.INTEGER })
  postalCode: number;

  @Column({ field: 'SETTLEMENT', type: DataType.STRING })
  settlement: string;

  @Column({ field: 'SETTLEMENT_TYPE', type: DataType.STRING })
  settlementType: string;

  @Column({ field: 'MUNICIPALITY', type: DataType.STRING })
  municipality: string;

  @Column({ field: 'STATE', type: DataType.STRING })
  state: string;

  @Column({ field: 'KEY_STATE', type: DataType.INTEGER })
  keyState: number;

  @Column({ field: 'CITY', type: DataType.STRING })
  city: string;

  @Column({ field: 'IS_ACTIVE', type: DataType.INTEGER })
  isActive: number;
}
