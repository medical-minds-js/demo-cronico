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
  tableName: 'app_t_105_news',
  updatedAt: false,
})
export class NewsEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @Column({ field: 'TITLE', type: DataType.STRING(200) })
  title: string;

  @Column({ field: 'DESCRIPTION', type: DataType.STRING(200) })
  description: number;

  @Column({ field: 'TEXT', type: DataType.STRING(200) })
  text: string;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;
}
