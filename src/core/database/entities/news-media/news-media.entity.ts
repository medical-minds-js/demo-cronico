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
  tableName: 'app_t_106_news_media',
  updatedAt: false,
  createdAt: true,
})
export class NewsMediaEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @Column({
    field: 'ID_NEWS',
    type: DataType.INTEGER,
  })
  newsId: number;

  @Column({
    field: 'ID_TYPE_MEDIA',
  })
  typeMediaId: number;

  @Column({ field: 'SOURCE', type: DataType.STRING(200) })
  source: string;

  @CreatedAt
  @Column({ field: 'CREATED_AT' })
  createdAt: Date;
}
