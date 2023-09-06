import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Op, QueryTypes, Sequelize } from 'sequelize';
import {
  AILMENT_REPOSITORY,
  PRODUCT_IMAGES_REPOSITORY,
  PRODUCT_REPOSITORY,
  SEQUELIZE,
} from 'src/core/constants';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { ProductImageEntity } from 'src/core/database/entities/product-images/product-images.entity';
import { ProductPartEntity } from 'src/core/database/entities/product-parts/product-parts.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { SaleEntity } from 'src/core/database/entities/sales/sale.entity';
import { ProductFilters } from './interfaces/product-filters';
import { SupplyEntity } from 'src/core/database/entities/supplies/supply.entity';
import { AilmentsImageEntity } from 'src/core/database/entities/ailments-images/ailment-images.entity';
import { ProductAilmentsEntity } from 'src/core/database/entities/product-ailments/product-ailments.entity';
import { SearchDbItem } from './interfaces/search-interface';

@Injectable()
export class ProductsRepositoryService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof ProductEntity,
    @Inject(AILMENT_REPOSITORY)
    private readonly ailmentRepository: typeof AilmentEntity,
    @Inject(PRODUCT_IMAGES_REPOSITORY)
    private readonly productImageRepository: typeof ProductImageEntity,
    @Inject(SEQUELIZE)
    private readonly conn: Sequelize,
  ) {}

  async searchByText(
    text: string,
    page = 0,
    itemsPerPage = 0,
  ): Promise<SearchDbItem[]> {
    let query = `Select * from (${this.generateQuerySearchByText(text)}) t`;
    if (page && itemsPerPage) {
      const offset = (page - 1) * itemsPerPage;
      query += ` LIMIT ${offset}, ${itemsPerPage}`;
    }
    return this.conn.query(query, {
      plain: false,
      type: QueryTypes.SELECT,
    });
  }

  private generateQuerySearchByText(text: string): string {
    let whereP = '';
    let whereA = '';
    if (text) {
      whereP = `WHERE p.NAME LIKE '%${text}%' OR p.DESCRIPTION LIKE '%${text}%'`;
      whereA = `WHERE a.NAME LIKE '%${text}%' OR a.DESCRIPTION LIKE '%${text}%'`;
    }
    return `SELECT
	a.ID id,
  2 type
  FROM  app_t_109_ailments a ${whereA}
UNION ALL
  SELECT
	p.ID id,
  1 type
  FROM 	app_t_107_products p ${whereP}`;
  }

  async countSearchByText(text: string): Promise<number> {
    const query = `Select COUNT(t.id) total from (
      ${this.generateQuerySearchByText(text)}) t`;
    const counts: any = await this.conn.query<any[]>(query, {
      plain: false,
      type: QueryTypes.SELECT,
    });
    return counts[0].total;
  }

  async viewAilmentsByIdList(ailmentsIds: number[]) {
    const data = await this.ailmentRepository.findAll<AilmentEntity>({
      include: [AilmentsImageEntity, ProductAilmentsEntity, ProductEntity],
      where: { id: { [Op.in]: ailmentsIds } },
    });
    return data.map((i) => i.get({ plain: true }));
  }

  async viewProductsByIds(ids: number[]): Promise<ProductEntity[]> {
    const data = await this.productRepository.findAll<ProductEntity>({
      where: { id: { [Op.in]: ids } },
      include: [ProductImageEntity, SupplyEntity, ProductPartEntity],
    });
    return data.map((i) => i.get({ plain: true }));
  }

  async viewPartProductsByIds(ids: number[]): Promise<ProductEntity[]> {
    const data = await this.productRepository.findAll<ProductEntity>({
      where: { id: { [Op.in]: ids } },
      include: [ProductImageEntity, SupplyEntity],
    });
    return data.map((i) => i.get({ plain: true }));
  }

  async findOneById(id: number): Promise<ProductEntity> {
    return this.productRepository.findOne<ProductEntity>({
      where: { id: [id] },
      include: [
        SaleEntity,
        AilmentEntity,
        ProductPartEntity,
        ProductImageEntity,
      ],
    });
  }

  async viewOneById(id: number): Promise<ProductEntity> {
    const data = await this.productRepository.findOne<ProductEntity>({
      where: { id: [id] },
      include: [
        SaleEntity,
        AilmentEntity,
        ProductPartEntity,
        ProductImageEntity,
      ],
    });
    if (!data) {
      throw new NotFoundException();
    }
    if (data.productType === 1) {
      return data.get({ plain: true });
    }
    const product = data.get({ plain: true });
    const ids = product.productParts.map((part) => part.productPartId);
    if (ids.length === 0) {
      return data.get({ plain: true });
    }
    const items = await this.productRepository.findAll<ProductEntity>({
      where: { id: { [Op.in]: ids } },
      include: [AilmentEntity, ProductImageEntity],
    });
    return {
      ...product,
      productParts: items.map((i) => i.get({ plain: true })),
    } as ProductEntity;
  }

  async findNewProducts(date: string): Promise<ProductEntity[]> {
    const startedDate = new Date(date + ' 00:00:00');
    const endDate = new Date(date + ' 11:59:59');
    return await this.productRepository.findAll<ProductEntity>({
      where: { createdAt: { [Op.between]: [startedDate, endDate] } },
      include: [SaleEntity, AilmentEntity, ProductImageEntity],
      limit: 2,
    });
  }

  async getImagesByIds(ids): Promise<ProductImageEntity[]> {
    return this.productImageRepository.findAll<ProductImageEntity>({
      where: { productId: { [Op.in]: ids } },
    });
  }
}
