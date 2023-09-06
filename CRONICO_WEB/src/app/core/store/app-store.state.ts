import { Address } from '@core/interfaces/address.interface';
import { Ailment } from '@core/interfaces/ailment.interface';
import { Card } from '@core/interfaces/cards.interface';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';
import { ShoppingCart } from '@core/interfaces/order.interface';
import { PaginationList } from '@core/interfaces/paginate.interface';
import { PostalCode } from '@core/interfaces/postal-codes.interface';
import {
  AilmentProduct,
  Product,
  ProductFilters,
  ProductSearch,
} from '@core/interfaces/product.interface';
import { ShoppingProduct } from '@core/interfaces/shopping-product.interface';
import { Subscription } from '@core/interfaces/subscription.interface';
import { User } from '@core/interfaces/user';
import {
  UserAilments,
  UserAilmentsProduct,
  UserAilmentsSearch,
} from '@core/interfaces/user-ailments';

export interface AppState {
  isInitialized: boolean;
  currentUser: User;
  showAddressAddForm: boolean;
  showAddressEditForm: boolean;
  showEditUserForm: boolean;
  showDeliveryForm: boolean;
  productFilters: ProductFilters;
  mainProduct: Product;
  mainPackage: Product;
  newProducts: Product[];
  totalPages: number;
  products: Product[];
  ailments: AilmentProduct[];
  search: ProductSearch[];
  currentProduct: Product;
  currentDisease: Product;
  currentAilment: Ailment;
  separateShoppingCart: boolean;
  shoppingCart: ShoppingCart[];
  shoppingCart30: ShoppingCart[];
  shoppingCart15: ShoppingCart[];
  shoppingProduct: ShoppingProduct;
  currentAddress: Address;
  editableAddress: Address;
  address: Address[];
  postalCodes: PostalCode[];
  cards: Card[];
  currentCard: Card;
  shoppingAddCard: boolean;
  deliveriesTimes: DeliveryTime[];
  deviceSession: string;
  subscriptions: Subscription[];
  paginationSubs: PaginationList;
  currentSubscription: Subscription;
  userAilmentsSearch: UserAilmentsSearch[];
  userAilments: UserAilments;
}
