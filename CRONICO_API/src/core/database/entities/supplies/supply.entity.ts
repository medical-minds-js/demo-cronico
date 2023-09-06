import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';

@Table({
  tableName: 'map_t_010_supplies',
  createdAt: false,
  updatedAt: false,
})
export class SupplyEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID_SUPPLY', type: DataType.INTEGER({ length: 11 }) })
  supplyId: number;

  @Column({ field: 'KEY', type: DataType.STRING(45) })
  key: string;

  @Column({ field: 'SHORT_KEY', type: DataType.STRING(45) })
  shortKey: string;

  @Column({ field: 'NAME', type: DataType.TEXT })
  name: string;

  @Column({ field: 'PRESENTATION', type: DataType.TEXT })
  presentation: string;

  @Column({ field: 'TYPE', type: DataType.STRING(45) })
  type: string;

  @Column({ field: 'ID_RACK', type: DataType.INTEGER({ length: 11 }) })
  rackId: number;

  @Column({ field: 'ID_IMAGE', type: DataType.INTEGER({ length: 11 }) })
  imageId: number;

  @HasMany(() => ProductEntity)
  products: ProductEntity[];
}
