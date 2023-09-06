import { SHOPPING_CART_REPOSITORY } from 'src/core/constants';
import { ShoppingCartEntity } from './shopping-cart.entity';

export const shoppingCartEntityProviders = [
  {
    provide: SHOPPING_CART_REPOSITORY,
    useValue: ShoppingCartEntity,
  },
];
