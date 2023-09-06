import { PRODUCT_IMAGES_REPOSITORY } from 'src/core/constants';
import { ProductImageEntity } from './product-images.entity';

export const productImageEntityProviders = [
  {
    provide: PRODUCT_IMAGES_REPOSITORY,
    useValue: ProductImageEntity,
  },
];
