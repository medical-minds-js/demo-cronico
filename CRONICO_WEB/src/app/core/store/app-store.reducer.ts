import { Action } from '@core/interfaces/action.interface';
import { AppState } from './app-store.state';
import { AppStoreActions } from './app-store.actions';
import { Product, ProductFilters } from '@core/interfaces/product.interface';
import { Address } from '@core/interfaces/address.interface';
import { ShoppingProduct } from '@core/interfaces/shopping-product.interface';
import { User } from '@core/interfaces/user';
import { Card } from '@core/interfaces/cards.interface';
import { Ailment } from '@core/interfaces/ailment.interface';
import { Subscription } from '@core/interfaces/subscription.interface';
import { ShoppingCart } from '@core/interfaces/order.interface';
import { ProcessProductsShoppingCart } from '@core/interfaces/process-producs-shopping-cart.interface';

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case AppStoreActions.init: {
      return {
        isInitialized: false,
        mainProduct: { images: [] } as any,
        mainPackage: {} as Product,
        currentUser: {} as User,
        showEditUserForm: false,
        currentProduct: { sales: [], images: [] } as any,
        currentDisease: {} as Product,
        currentAilment: {} as Ailment,
        currentAddress: {} as Address,
        editableAddress: {} as Address,
        postalCodes: [],
        currentSubscription: {} as Subscription,
        productFilters: {
          itemsPerPage: 10,
          page: 1,
        } as ProductFilters,
        shoppingProduct: {
          product: { sales: [] } as any,
        } as ShoppingProduct,
        newProducts: [],
        products: [],
        ailments: [],
        search: [],
        totalPages: 0,
        address: [],
        separateShoppingCart: false,
        shoppingCart: [],
        shoppingCart30: [],
        shoppingCart15: [],
        showAddressEditForm: false,
        showAddressAddForm: false,
        showDeliveryForm: false,
        cards: [],
        currentCard: {} as Card,
        deliveriesTimes: [],
        shoppingAddCard: false,
        deviceSession: '',
        subscriptions: [],
        paginationSubs: { page: 1, itemsPerPage: 10 },
        userAilmentsSearch: [],
        userAilments: { ailments: { images: [], name: '' } } as any,
      };
    }
    case AppStoreActions.setHome:
      return {
        ...state,
        mainProduct: action.payload.mainProduct,
        mainPackage: action.payload.mainPackage,
        newProducts: action.payload.newProducts,
      };
    case AppStoreActions.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload.dataUser,
      };
    case AppStoreActions.setProducts:
      return {
        ...state,
        search: action.payload.search,
        totalPages: action.payload.totalPages,
      };
    case AppStoreActions.setProduct:
      return {
        ...state,
        currentProduct: action.payload.product,
      };
    case AppStoreActions.setDisease:
      return {
        ...state,
        currentDisease: action.payload.disease,
      };
    case AppStoreActions.setAilment:
      return {
        ...state,
        currentAilment: action.payload.ailment,
      };
    case AppStoreActions.initShoppingCart:
      return {
        ...state,
        shoppingCart: action.payload.shoppingCart,
        ...processShoppingCartProducts(action.payload.shoppingCart),
        address: action.payload.address,
        editableAddress: action.payload.address.find(
          (i: Address) => i.status === 1
        ),
        deliveriesTimes: action.payload.deliveries,
      };
    case AppStoreActions.setPostalCodes:
      return { ...state, postalCodes: action.payload.list };
    case AppStoreActions.setShoppingCart:
      return {
        ...state,
        shoppingCart: action.payload.shoppingCart,
        ...processShoppingCartProducts(action.payload.shoppingCart),
      };
    case AppStoreActions.setAddress:
      return {
        ...state,
        address: action.payload.address,
      };
    case AppStoreActions.setCurrentAddress:
      return {
        ...state,
        currentAddress: action.payload.address,
      };
    case AppStoreActions.setShoppingProduct:
      return {
        ...state,
        shoppingProduct: action.payload.shoppingProduct,
      };
    case AppStoreActions.setShoppingCards:
      return {
        ...state,
        cards: action.payload.cards,
        shoppingAddCard: action.payload.cards.length === 0,
      };
    case AppStoreActions.setShoppingAddCard:
      return {
        ...state,
        shoppingAddCard: action.payload.shoppingAddCard,
      };
    case AppStoreActions.setFormCreateAddress:
      return {
        ...state,
        showAddressAddForm: action.payload.showAddressAddForm,
        editableAddress: action.payload.editableAddress,
      };
    case AppStoreActions.setFormEditAddress:
      return {
        ...state,
        address: state.address.map((item) => ({
          ...item,
          editing: item.id == action.payload.editableAddress.id,
        })),
        showAddressEditForm: action.payload.showAddressEditForm,
        editableAddress: action.payload.editableAddress,
      };
    case AppStoreActions.showEditUserForm:
      return {
        ...state,
        showEditUserForm: action.payload.showEditUserForm,
      };
    case AppStoreActions.setFormDelivery:
      return {
        ...state,
        showDeliveryForm: action.payload.showEditDelivery,
        editableAddress: action.payload.editableAddress,
      };
    case AppStoreActions.setProductFilters:
      return {
        ...state,
        productFilters: action.payload.filters,
      };
    case AppStoreActions.setDeviceSession:
      return {
        ...state,
        deviceSession: action.payload.deviceSession,
      };
    case AppStoreActions.setSubsciptions:
      return {
        ...state,
        subscriptions: action.payload.subs,
      };
    case AppStoreActions.setCurrentSub:
      return {
        ...state,
        currentSubscription: action.payload.sub,
      };
    case AppStoreActions.initUserAilmentsSearch:
      return {
        ...state,
        userAilmentsSearch: action.payload.userAilmentsSearch,
      };
    case AppStoreActions.initUserAilments:
      return {
        ...state,
        userAilments: action.payload.userAilments,
      };
    case AppStoreActions.initAccountAddress:
      return {
        ...state,
        address: action.payload.address,
        deliveriesTimes: action.payload.deliveries,
      };
    default:
      return state;
  }
}

function processShoppingCartProducts(
  products: ShoppingCart[]
): ProcessProductsShoppingCart {
  const diferent: number[] = products
    .map((i: ShoppingCart) => i.period)
    .filter(
      (value: number, index: number, arr: number[]) =>
        arr.indexOf(value) === index
    );
  let shoppingCart30: ShoppingCart[] = [];
  let shoppingCart15: ShoppingCart[] = [];
  let separateShoppingCart = diferent.length > 1;
  if (separateShoppingCart) {
    shoppingCart30 = products.filter(
      (i: ShoppingCart) => Number(i.period) === 30
    );
    shoppingCart15 = products.filter(
      (i: ShoppingCart) => Number(i.period) === 15
    );
  }
  return { separateShoppingCart, shoppingCart30, shoppingCart15 };
}
