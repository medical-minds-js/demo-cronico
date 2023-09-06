import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { ProductsRepositoryService } from './products-repository.service';
import { ProductFilters } from './interfaces/product-filters';
import { SearchItem } from './interfaces/search-interface';
import { ProductImageEntity } from 'src/core/database/entities/product-images/product-images.entity';
import { PaginatedList } from 'src/core/interfaces/paginated-list.interface';

@Injectable()
export class ProductsService {
  @Inject(ProductsRepositoryService)
  private readonly productRepository: ProductsRepositoryService;

  async getHomePrincipalProduct(): Promise<any> {
    return this.productRepository.viewOneById(1);
  }

  async getNewProducts(): Promise<any[]> {
    return this.productRepository.findNewProducts('2023-08-31');
  }

  async getHomePrincipalPackage(): Promise<any> {
    return this.productRepository.viewOneById(3);
  }

  async getProducts(
    filters: ProductFilters,
  ): Promise<PaginatedList<SearchItem>> {
    const total = await this.productRepository.countSearchByText(filters.name);
    if (total === 0) {
      return {
        items: [],
        total: 0,
      };
    }
    const ids = await this.productRepository.searchByText(
      filters.name,
      filters.page,
      filters.itemsPerPage,
    );

    const productIds = ids.filter((i) => i.type === 1);
    const ailmentsIds = ids.filter((i) => i.type === 2);
    let products = [];
    let ailments = [];
    if (productIds.length > 0) {
      products = await this.viewProductByIds(productIds.map((i) => i.id));
    }
    if (ailmentsIds.length > 0) {
      ailments = await this.productRepository.viewAilmentsByIdList(
        ailmentsIds.map((i) => i.id),
      );
    }
    const items = ids.map((search) => {
      if (search.type === 1) {
        return {
          type: search.type,
          product: products.find((i) => i.id === search.id),
          ailments: null,
        };
      }
      return {
        type: search.type,
        ailments: ailments.find((i) => i.id === search.id),
        product: null,
      };
    });
    return { items, total };
  }

  async getProductById(id: number): Promise<ProductEntity> {
    const data = await this.productRepository.findOneById(id);
    const product = data.get({ plain: true });
    if (product.productType == 2) {
      if (product.productParts.length === 0) {
        return product;
      }
      const parts = await this.productRepository.viewPartProductsByIds(
        product.productParts.map((part) => part.productPartId),
      );
      return {
        ...product,
        productParts: parts,
      } as ProductEntity;
    }
    return product;
  }

  async viewProductByIds(ids: number[]): Promise<ProductEntity[]> {
    const products = await this.productRepository.viewProductsByIds(ids);
    const allIds = [];
    products
      .filter((item) => item.productType === 2)
      .forEach((i) => i.productParts.map((i) => allIds.push(i.productPartId)));
    const partsIds = allIds.filter(
      (item, index) => allIds.indexOf(item) === index,
    );
    const parts = await this.productRepository.viewPartProductsByIds(partsIds);
    return products.map((item) => {
      if (item.productType === 2) {
        const products = item.productParts.map((part) =>
          parts.find((product) => product.id === part.productPartId),
        );
        return { ...item, products };
      }
      return item;
    }) as ProductEntity[];
  }

  async viewImagesByIds(ids: number[]): Promise<ProductImageEntity[]> {
    const images = await this.productRepository.getImagesByIds(ids);
    return images.map((i) => i.get({ plain: true }));
  }
}
