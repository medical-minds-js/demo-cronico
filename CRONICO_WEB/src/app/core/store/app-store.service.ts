import { Injectable } from '@angular/core';
import { BaseStore } from './base-store.class';
import { Observable, concat, forkJoin, of } from 'rxjs';
import { HomeService } from 'src/app/modules/home/service/home.service';
import { AppStoreActions } from './app-store.actions';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import {
  dataValue,
  itemsValue,
  listValue,
} from '@core/functions/api-value.function';
import { SearchService } from 'src/app/modules/search/services/search.service';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/service/shopping-cart.service';
import { ShoppingCart } from '@core/interfaces/order.interface';
import {
  Product,
  ProductFilters,
  ProductSearch,
} from '@core/interfaces/product.interface';
import { AddressService } from 'src/app/modules/shopping-cart/service/address.service';
import { Address } from '@core/interfaces/address.interface';
import { ShoppingProduct } from '@core/interfaces/shopping-product.interface';
import { SessionService } from '@services/session/session.service';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';
import { DeliveryTimesService } from 'src/app/modules/shopping-cart/service/delivery-times.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { AccountService } from 'src/app/modules/account/service/account.service';
import {
  ApiDataResponse,
  ApiGeneralResponse,
  ApiListResponse,
} from '@core/interfaces/http.interfaces';
import { Login } from 'src/app/modules/auth/interfaces/login.interface';
import { Register } from 'src/app/modules/auth/interfaces/register.interface';
import { CardsService } from 'src/app/modules/shopping-cart/service/cards.service';
import { User } from '@core/interfaces/user';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';
import { Ailment } from '@core/interfaces/ailment.interface';
import { OrdersService } from 'src/app/modules/orders/services/orders.service';
import { PaginationList } from '@core/interfaces/paginate.interface';
import { Subscription } from '@core/interfaces/subscription.interface';
import { PostalCode } from '@core/interfaces/postal-codes.interface';
import {
  UserAilments,
  UserAilmentsProduct,
} from '@core/interfaces/user-ailments';
import { SupplyRequest } from '@core/interfaces/supply-request.interface';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService extends BaseStore {
  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private accountService: AccountService,
    public homeService: HomeService,
    public searchService: SearchService,
    public shoppingCartService: ShoppingCartService,
    public addressService: AddressService,
    public deliveryTimesService: DeliveryTimesService,
    public cardsService: CardsService,
    public ordersService: OrdersService
  ) {
    super();
    this.changeState(AppStoreActions.init);
  }

  login(info: Login): Observable<ApiGeneralResponse> {
    return this.authService.login(info).pipe(
      switchMap((response) => {
        this.sessionService.setToken(response.access_token);
        return this.accountService.getData().pipe(
          map((dataUser) => {
            this.sessionService.login(dataValue(dataUser));
            this.changeState(AppStoreActions.setCurrentUser, {
              dataUser: dataValue(dataUser),
            });
            return dataUser as ApiGeneralResponse;
          })
        );
      })
    );
  }

  register(info: Register): Observable<ApiGeneralResponse> {
    return this.authService.register(info).pipe(
      switchMap((response) => {
        this.sessionService.setToken(response.access_token);
        return this.accountService.getData().pipe(
          map((dataUser) => {
            this.sessionService.login(dataValue(dataUser));
            this.changeState(AppStoreActions.setCurrentUser, {
              dataUser: dataValue(dataUser),
            });
            return dataUser as ApiGeneralResponse;
          })
        );
      })
    );
  }

  loadHome(): Observable<boolean> {
    if (this.sessionService.isAuthenticated()) {
      return forkJoin([
        this.homeService.getMainProduct(),
        this.homeService.getMainPackage(),
        this.homeService.getNewProducts(),
        this.accountService.getData().pipe(catchError(() => of(null))),
      ]).pipe(
        map(([product, packageProduct, newProducts, dataUser]) => {
          const data = {
            mainProduct: dataValue(product),
            mainPackage: dataValue(packageProduct),
            newProducts: itemsValue(newProducts),
          };
          if (dataUser) {
            this.changeState(AppStoreActions.setCurrentUser, {
              dataUser: dataValue(dataUser),
            });
          }

          return this.changeState(AppStoreActions.setHome, data);
        })
      );
    } else {
      return forkJoin([
        this.homeService.getMainProduct(),
        this.homeService.getMainPackage(),
        this.homeService.getNewProducts(),
      ]).pipe(
        map(([product, packageProduct, newProducts]) => {
          const data = {
            mainProduct: dataValue(product),
            mainPackage: dataValue(packageProduct),
            newProducts: itemsValue(newProducts),
          };
          return this.changeState(AppStoreActions.setHome, data);
        })
      );
    }
  }

  loadProducts(): Observable<boolean> {
    let filters: ProductFilters = this.getObjectState().productFilters;
    return this.searchService.getProducts(filters).pipe(
      map((response: ApiListResponse<ProductSearch>) => {
        const data = dataValue(response);
        return this.changeState(AppStoreActions.setProducts, {
          search: data.items,
          totalPages: Math.ceil(data.total / filters.itemsPerPage),
        });
      })
    );
  }

  loadShopping(): Observable<boolean> {
    let paginate: PaginationList = this.getObjectState().paginationSubs;
    return this.ordersService.getSubscriptionsList(paginate).pipe(
      map((data) => {
        let listResponse = dataValue(data).items;
        return this.changeState(AppStoreActions.setSubsciptions, {
          subs: listResponse,
        });
      })
    );
  }

  loadCurrentShopping(id: number): Observable<boolean> {
    return this.ordersService.getSubscriptionsById(id).pipe(
      map((response) => {
        let data = dataValue(response);
        this.setCurrentSubsciption(data);
        return true;
      })
    );
  }

  setCurrentSubsciption(sub: Subscription): Observable<boolean> {
    this.changeState(AppStoreActions.setCurrentSub, {
      sub,
    });
    return of(true);
  }

  updateProductFilters(filter?: string) {
    let data: any = {
      itemsPerPage: 10,
      pageNumber: 1,
    };
    if (filter) {
      data.name = filter;
    }
    this.changeState(AppStoreActions.setProductFilters, { filters: data });
    return this.loadProducts();
  }

  updatePageNumber(pageNumber: number) {
    let data = this.getObjectState().productFilters;
    data.page = pageNumber;
    this.changeState(AppStoreActions.setProductFilters, { filters: data });
    return this.loadProducts();
  }

  getMainProduct(): Product {
    return this.getObjectState().mainProduct;
  }
  validateCurrentProduct(): boolean {
    return this.getObjectState().currentProduct.id != undefined ? true : false;
  }

  validateCurrentDisease(): boolean {
    return this.getObjectState().currentDisease.id != undefined ? true : false;
  }

  validateCurrentAilment(): boolean {
    return this.getObjectState().currentAilment.id != undefined ? true : false;
  }

  selectCurrentProduct(productId: number): Observable<boolean> {
    return this.searchService.getProductById(productId).pipe(
      switchMap((response: any) => {
        if (response.productType == 2) {
          const data = {
            disease: response,
          };
          this.changeState(AppStoreActions.setDisease, data);
        } else {
          const data = {
            product: response,
          };
          this.changeState(AppStoreActions.setProduct, data);
        }
        return of(true);
      })
    );
  }

  selectCurrentAilment(ailment: Ailment): Observable<boolean> {
    this.changeState(AppStoreActions.setAilment, {
      ailment,
    });
    return of(true);
  }

  addCarts(orders: ShoppingProduct): Observable<boolean> {
    const shoopingCart: ShoppingCart = {
      userId: this.sessionService.getUserId(),
      productId: orders.product.id,
      dose: orders.dose,
      pieces: orders.pieces,
      period: orders.period,
      subtotal: orders.subtotal,
      discount: orders.discount,
      total: orders.total,
    } as ShoppingCart;
    return this.shoppingCartService.addShoppingCart(shoopingCart).pipe(
      switchMap((result) => {
        return this.shoppingCartService
          .getShoppingCarts(this.sessionService.getUserId())
          .pipe(
            switchMap((res) => {
              const data = {
                products: this.getObjectState().products,
                address: this.getObjectState().address,
                shoppingCart: itemsValue(res),
              };

              this.changeState(AppStoreActions.setShoppingCart, data);
              return of(true);
            })
          );
      })
    );
  }

  deleteShoppingCart(orderId: number): Observable<boolean> {
    return this.shoppingCartService.deleteShoppingCart(orderId).pipe(
      switchMap((result) => {
        return this.shoppingCartService
          .getShoppingCarts(this.sessionService.getUserId())
          .pipe(
            switchMap((res) => {
              const data = {
                shoppingCart: itemsValue(res),
              };
              this.changeState(AppStoreActions.setShoppingCart, data);
              return of(true);
            })
          );
      })
    );
  }

  editShoppingCart(item: ShoppingCart) {
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      return { ...cart, editing: item.id == cart.id };
    });
    return this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
  }

  showEditUserForm(show: boolean) {
    return this.changeState(AppStoreActions.showEditUserForm, {
      showEditUserForm: show,
    });
  }

  updateUser(user: User) {
    return this.accountService.updateData(user).pipe(
      switchMap((res) => {
        return this.accountService.getData().pipe(
          switchMap((dataUser) => {
            this.changeState(AppStoreActions.setCurrentUser, {
              dataUser: dataValue(dataUser),
            });
            return of(true);
          })
        );
      })
    );
  }

  showAddAddressForm() {
    return this.changeState(AppStoreActions.setFormCreateAddress, {
      showAddressAddForm: true,
      editableAddress: {},
    });
  }

  closeFormAddAddress() {
    return this.changeState(AppStoreActions.setFormCreateAddress, {
      showAddressAddForm: false,
      editableAddress: {},
    });
  }

  showAddressEditForm(editableAddress: Address) {
    return this.changeState(AppStoreActions.setFormEditAddress, {
      showAddressEditForm: true,
      editableAddress,
    });
  }

  closeAddressEditForm() {
    return this.changeState(AppStoreActions.setFormEditAddress, {
      showAddressEditForm: false,
      editableAddress: {} as Address,
    });
  }

  showEditDeliveryForm(editableAddress: Address) {
    this.changeState(AppStoreActions.setFormDelivery, {
      showEditDelivery: true,
      editableAddress,
    });

    return true;
  }

  closeEditDeliveryForm() {
    this.changeState(AppStoreActions.setFormDelivery, {
      showEditDelivery: false,
      editableAddress: {} as Address,
    });

    return true;
  }

  closeEditShoppingCart(): Observable<boolean> {
    let foundEdited = this.getObjectState().shoppingCart.find(
      (cart) => cart.editing
    );
    if (foundEdited) {
      const toUpdate = JSON.parse(JSON.stringify(foundEdited));
      return this.shoppingCartService.updateShoppingCart(toUpdate).pipe(
        switchMap(() => {
          return this.shoppingCartService
            .getShoppingCarts(this.sessionService.getUserId())
            .pipe(
              switchMap((res) => {
                this.changeState(AppStoreActions.setShoppingCart, {
                  shoppingCart: itemsValue(res),
                });
                return of(true);
              })
            );
        })
      );
    }
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      return { ...cart, editing: false };
    });
    this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
    return of(true);
  }

  private refrestPriceShoppingCart(item: ShoppingCart): ShoppingCart {
    item.subtotal = item.product.price * item.pieces;
    if (item.product.sales.length > 0) {
      item.discount = (item.subtotal / 100) * item.product.sales[0].percent;
    }
    item.total = item.subtotal - item.discount;
    const required = item.dose * Number(item.period);
    item.suggestedPieces = Math.ceil(required / item.product.presentation);
    return item;
  }

  addDoseShoppingCart(item: ShoppingCart) {
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      if (item.id == cart.id) {
        cart.dose = cart.dose + 0.5;
        return this.refrestPriceShoppingCart(cart);
      }
      return cart;
    });
    return this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
  }

  resShoppingCart(item: ShoppingCart) {
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      if (item.id == cart.id && cart.dose > 0.5) {
        cart.dose = cart.dose - 0.5;
        return this.refrestPriceShoppingCart(cart);
      }
      return cart;
    });
    return this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
  }

  addPiecesShoppingCart(item: ShoppingCart) {
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      if (item.id == cart.id) {
        cart.pieces = cart.pieces + 1;
        return this.refrestPriceShoppingCart(cart);
      }
      return cart;
    });
    return this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
  }

  resPiecesShoppingCart(item: ShoppingCart) {
    const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
      if (item.id == cart.id && cart.pieces > 1) {
        cart.pieces = cart.pieces - 1;
        return this.refrestPriceShoppingCart(cart);
      }
      return cart;
    });
    return this.changeState(AppStoreActions.setShoppingCart, {
      shoppingCart: newShoopingCart,
    });
  }

  private refrestPriceSubscription(item: Subscription): Subscription {
    // item.subtotal = item.product.price * item.pieces;
    // if (item.sale != undefined) {
    //   item.discount = (item.subtotal / 100) * item.sale.percent;
    // }
    // item.total = item.subtotal - item.discount;
    // const required = item.dose * Number(item.period);
    // item.suggestedPieces = Math.ceil(required / item.product.presentation);
    return item;
  }

  addDoseSubscription() {
    // const newSubscription = this.getObjectState().currentSub;
    // newSubscription.dose = newSubscription.dose + 0.5;
    // this.refrestPriceSubscription(newSubscription);
    // return this.changeState(AppStoreActions.setCurrentSub, {
    //   sub: newSubscription,
    // });
  }

  resSubscription() {
    // const newSubscription = this.getObjectState().currentSub;
    // newSubscription.dose = newSubscription.dose - 0.5;
    // this.refrestPriceSubscription(newSubscription);
    // return this.changeState(AppStoreActions.setCurrentSub, {
    //   sub: newSubscription,
    // });
  }

  addPiecesSubscription() {
    // const newSubscription = this.getObjectState().currentSub;
    // newSubscription.pieces = newSubscription.pieces + 1;
    // this.refrestPriceSubscription(newSubscription);
    // return this.changeState(AppStoreActions.setCurrentSub, {
    //   sub: newSubscription,
    // });
  }
  resPiecesSubscription() {
    // const newSubscription = this.getObjectState().currentSub;
    // if (newSubscription.pieces > 1) {
    //   newSubscription.pieces = newSubscription.pieces - 1;
    //   return this.refrestPriceSubscription(newSubscription);
    // }
    // return this.changeState(AppStoreActions.setCurrentSub, {
    //   sub: newSubscription,
    // });
  }

  changeDeliveryDate(isCorrectDate: boolean, deliveryDate: Date) {
    if (isCorrectDate) {
      const newSubscription = this.getObjectState().currentSubscription;
      newSubscription.nextDelivery = deliveryDate;
      return this.changeState(AppStoreActions.setCurrentSub, {
        sub: newSubscription,
      });
    } else {
      return false;
    }
  }
  generateOrdersbyDesease() {
    // let orders: ShoppingCart[] = [];
    // this.getObjectState().currentDisease.productParts.map((item) => {
    //   let total: number = Math.ceil((30 * 1) / item.piecesPerBox);
    //   let data: ShoppingCart = {
    //     id: orders.length + 1,
    //     productId: item.id,
    //     dose: 1,
    //     supplying: 30,
    //     userId: 0,
    //   };
    //   orders.push(data);
    // });
    // return this.addCarts(orders);
  }

  loadShoppingCart() {
    return forkJoin([
      this.shoppingCartService.getShoppingCarts(
        this.sessionService.getUserId()
      ),
      this.addressService.getAddressList(),
      this.deliveryTimesService.getDeliveryTimesList(),
      this.getCardsByUser(),
    ]).pipe(
      map(([shoppingCart, address, deliveries]) => {
        const data = {
          shoppingCart: itemsValue<ShoppingCart>(shoppingCart),
          address: itemsValue(address).sort((a, b) =>
            a.status > b.status ? -1 : 1
          ),
          deliveries: itemsValue(deliveries),
        };
        return this.changeState(AppStoreActions.initShoppingCart, data);
      })
    );
  }

  shoppingAddCard() {
    return this.changeState(AppStoreActions.setShoppingAddCard, {
      shoppingAddCard: true,
    });
  }

  shoppingCloseAddCard() {
    return this.changeState(AppStoreActions.setShoppingAddCard, {
      shoppingAddCard: false,
    });
  }

  currentProductToShopping(): Observable<boolean> {
    const shoppingProduct: ShoppingProduct = {
      product: this.getObjectState().currentProduct,
      period: '30',
      dose: 1,
      pieces: 1,
      suggestedPieces: 0,
      subtotal: 0,
      discount: 0,
      sale: 0,
      total: 0,
    } as any;
    this.updateShoppingProduct(shoppingProduct);
    return of(true);
  }

  updateShoppingProduct(shoppingProduct: ShoppingProduct): Observable<boolean> {
    shoppingProduct.subtotal =
      shoppingProduct.product.price * shoppingProduct.pieces;
    if (shoppingProduct.product.sales.length > 0) {
      shoppingProduct.discount =
        (shoppingProduct.subtotal / 100) *
        shoppingProduct.product.sales[0].percent;
    }
    shoppingProduct.total = shoppingProduct.subtotal - shoppingProduct.discount;
    const required = shoppingProduct.dose * Number(shoppingProduct.period);
    shoppingProduct.suggestedPieces = Math.ceil(
      required / shoppingProduct.product.presentation
    );
    this.changeState(AppStoreActions.setShoppingProduct, { shoppingProduct });
    return of(true);
  }

  saveAddress(newAddress: Address) {
    return this.addressService.addAddress(newAddress).pipe(
      switchMap(() => {
        this.changeState(AppStoreActions.setPostalCodes, {
          list: [],
        });
        return this.loadAccountAddressPage();
      })
    );
  }

  deleteAddress(addressId: number): Observable<boolean> {
    return this.addressService.deleteAddress(addressId).pipe(
      switchMap((result) => {
        return this.loadAccountAddressPage();
      })
    );
  }

  editAddress(newAddress: Address) {
    return this.addressService.updateAddress(newAddress).pipe(
      switchMap(() => {
        return this.loadAccountAddressPage();
      })
    );
  }

  setActiveAddress(id: number) {
    return this.addressService.setActiveAddress(id).pipe(
      switchMap(() => {
        return this.loadAccountAddressPage();
      })
    );
  }

  editDelivery(deliveriesTimes: DeliveryTime[]) {
    let editAddress: Address = this.getObjectState().editableAddress;
    editAddress.deliveryTimes = deliveriesTimes;
    return this.addressService.updateAddress(editAddress).pipe(
      switchMap(() => {
        return this.loadAccountAddressPage();
      })
    );
  }

  confirmOrder() {
    const deviceSession = this.getObjectState().deviceSession;
    return this.shoppingCartService.confirmOrder(deviceSession).pipe(
      switchMap(() => {
        return this.loadShoppingCart();
      })
    );
  }

  getPaymentId(): Observable<ApiDataResponse<string>> {
    return this.accountService.getData().pipe(
      switchMap((response: ApiDataResponse<User>) => {
        const user = dataValue(response);
        if (user.enableOpenPay) {
          return this.accountService.getPaymentId();
        }
        return this.accountService.activePayment().pipe(
          switchMap((response) => {
            return this.accountService.getData().pipe(
              switchMap((dataUser) => {
                this.sessionService.login(dataValue(dataUser));
                this.changeState(AppStoreActions.setCurrentUser, {
                  dataUser: dataValue(dataUser),
                });
                return this.accountService.getPaymentId();
              })
            );
          })
        );
      })
    );
  }

  addCardByUser(card: CreateCard): Observable<boolean> {
    return this.cardsService
      .addCardByUser(card)
      .pipe(switchMap((response) => this.getCardsByUser()));
  }

  getCardsByUser(): Observable<boolean> {
    return this.cardsService.getCardsByUser().pipe(
      map((cards) => {
        this.changeState(AppStoreActions.setShoppingCards, {
          cards: itemsValue(cards).sort((a, b) =>
            a.active > b.active ? -1 : 1
          ),
        });
        return true;
      })
    );
  }

  setDefaultCard(card: Card): Observable<boolean> {
    return this.cardsService
      .setDefaultCardByUser(card)
      .pipe(switchMap((response) => this.getCardsByUser()));
  }

  setDeviceSession(deviceSession: string) {
    return this.changeState(AppStoreActions.setDeviceSession, {
      deviceSession,
    });
  }

  validateDeviseSession(): boolean {
    return !!this.getObjectState().deviceSession;
  }

  updateSubscriptionQuantities() {
    let newSub: Subscription = this.getObjectState().currentSubscription;
    return this.ordersService.updateQuantities(newSub).pipe(
      switchMap(() => {
        this.changeState(AppStoreActions.setCurrentSub, {
          sub: newSub,
        });
        return of(true);
      })
    );
  }

  updateSubscriptionDelivery() {
    let newSub: Subscription = this.getObjectState().currentSubscription;
    return this.ordersService.updateDelivery(newSub).pipe(
      switchMap(() => {
        this.changeState(AppStoreActions.setCurrentSub, {
          sub: newSub,
        });
        return of(true);
      })
    );
  }

  loadPostalCodes(code: number) {
    return this.addressService.getPostalCodesList(code).pipe(
      switchMap((res) => {
        let codes: PostalCode[] = itemsValue(res);
        this.changeState(AppStoreActions.setPostalCodes, {
          list: codes,
        });
        return of(true);
      })
    );
  }

  loadAccountPage(): Observable<boolean> {
    return this.loadHome().pipe(
      switchMap(() => {
        return forkJoin([
          this.loadShoppingCart(),
          this.loadUserAilmentsPage(),
        ]).pipe(
          map(() => {
            // this.publish(AppStoreActions.initAccountPage, {
            //   initAccountPage: true,
            // });
            return true;
          })
        );
      })
    );
  }

  loadUserAilmentsPage(): Observable<boolean> {
    return this.accountService.getAilmentsByUser().pipe(
      switchMap((userAilments) => {
        this.changeState(AppStoreActions.initUserAilmentsSearch, {
          userAilmentsSearch: itemsValue(userAilments),
        });
        return of(true);
      })
    );
  }

  searchAilments(text?: string): Observable<boolean> {
    return this.accountService.getAilmentsByUser(text).pipe(
      switchMap((userAilments) => {
        this.changeState(AppStoreActions.initUserAilmentsSearch, {
          userAilmentsSearch: itemsValue(userAilments),
        });
        return of(true);
      })
    );
  }

  addAilments(
    id: number,
    textSearch?: string
  ): Observable<ApiDataResponse<UserAilments>> {
    return this.accountService.addAilmentsToUser(id).pipe(
      switchMap((response) => {
        return this.searchAilments(textSearch).pipe(map(() => response));
      })
    );
  }

  loadUserAilmentsDetailPage(id: number): Observable<boolean> {
    return this.accountService.getUserAilmentsDose(id).pipe(
      switchMap((userAilments) => {
        const data = dataValue(userAilments);
        data.userAilmentsProducts = data.userAilmentsProducts.map((item) => ({
          ...item,
          editing: !item.firstTake,
        }));
        this.changeState(AppStoreActions.initUserAilments, {
          userAilments: data,
        });
        return of(true);
      })
    );
  }

  editUserAilmentsProduct(
    data: UserAilmentsProduct
  ): Observable<ApiGeneralResponse> {
    return this.accountService.configDoseTake(data).pipe(
      switchMap((response) => {
        if (response.status !== 'success') {
          return of(response);
        }
        return this.loadUserAilmentsDetailPage(
          this.getObjectState().userAilments.id
        ).pipe(map(() => response));
      })
    );
  }

  closeEditUserAilmentsProduct(data: UserAilmentsProduct) {
    const userAilments = this.getObjectState().userAilments;
    const userAilmentsProducts = userAilments.userAilmentsProducts.map(
      (item) => {
        if (item.id === data.id) {
          return {
            ...item,
            editing: false,
          };
        }
        return item;
      }
    );
    this.changeState(AppStoreActions.initUserAilments, {
      userAilments: { ...userAilments, userAilmentsProducts },
    });
  }

  submitTakeDose(data: UserAilmentsProduct) {
    return this.accountService.saveTakeDose(data).pipe(
      switchMap((response) => {
        if (response.status !== 'success') {
          return of(response);
        }
        return this.loadUserAilmentsDetailPage(
          this.getObjectState().userAilments.id
        ).pipe(map(() => response));
      })
    );
  }

  loadAccountAddressPage(): Observable<boolean> {
    return forkJoin([
      this.addressService.getAddressList(),
      this.deliveryTimesService.getDeliveryTimesList(),
    ]).pipe(
      map(([address, deliveries]) => {
        const data = {
          address: itemsValue(address).sort((a, b) =>
            a.status > b.status ? -1 : 1
          ),
          deliveries: itemsValue(deliveries),
        };
        return this.changeState(AppStoreActions.initAccountAddress, data);
      })
    );
  }

  requestNewProduct(data: SupplyRequest) {
    return this.homeService.requestNewProduct(data);
  }
}
