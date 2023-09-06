import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { AilmentEntity } from '../ailments/ailment.entity';

@Table({
  tableName: 'app_t_207_products_ailments',
  createdAt: false,
  updatedAt: false,
})
export class ProductAilmentsEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => ProductEntity)
  @Column({
    field: 'ID_PRODUCT',
    type: DataType.INTEGER,
  })
  productId: number;

  @ForeignKey(() => AilmentEntity)
  @Column({
    field: 'ID_AILMENTS',
    type: DataType.INTEGER,
  })
  ailmentsId: number;
}
