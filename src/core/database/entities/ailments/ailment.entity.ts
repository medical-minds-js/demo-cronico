import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { ProductAilmentsEntity } from '../product-ailments/product-ailments.entity';
import { AilmentsImageEntity } from '../ailments-images/ailment-images.entity';
import { UserAilmentsEntity } from '../user-ailments/user-ailments.entity';
import { UserEntity } from '../user/user.entity';

@Table({
  tableName: 'app_t_109_ailments',
  createdAt: false,
  updatedAt: false,
})
export class AilmentEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER({ length: 11 }) })
  id: number;

  @BelongsToMany(() => ProductEntity, {
    through: { model: () => ProductAilmentsEntity },
    foreignKey: 'ailmentsId',
  })
  products: ProductEntity[];

  @Column({ field: 'NAME', type: DataType.STRING })
  name: string;

  @Column({ field: 'DESCRIPTION', type: DataType.STRING })
  description: string;

  @HasMany(() => AilmentsImageEntity)
  images: AilmentsImageEntity[];

  @HasMany(() => ProductAilmentsEntity)
  productParts: ProductAilmentsEntity[];

  searchType = 2;

  @BelongsToMany(() => UserEntity, {
    through: { model: () => UserAilmentsEntity },
    as: 'userAilmentsEntity',
    foreignKey: 'ailmentsId',
  })
  users: UserEntity[];
}
