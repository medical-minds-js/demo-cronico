import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { AilmentEntity } from '../ailments/ailment.entity';

@Table({
  tableName: 'app_t_203_ailments_images',
  createdAt: false,
  updatedAt: false,
})
export class AilmentsImageEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => AilmentEntity)
  @Column({
    field: 'ID_AILMENTS',
    type: DataType.INTEGER,
  })
  ailmentsId: number;

  @Column({
    field: 'URL',
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => AilmentEntity, 'id')
  ailments: AilmentEntity;
}
