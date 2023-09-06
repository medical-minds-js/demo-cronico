import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'app_t_111_supply_requests',
  updatedAt: false,
})
export class SupplyRequestEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @Column({ field: 'NAME', type: DataType.STRING(100) })
  name: number;

  @Column({ field: 'EMAIL', type: DataType.STRING(100) })
  email: number;

  @Column({ field: 'SUPPLY', type: DataType.STRING(100) })
  supply: string;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;
}
