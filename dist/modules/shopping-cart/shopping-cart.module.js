"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartModule = void 0;
const common_1 = require("@nestjs/common");
const shopping_cart_service_1 = require("./shopping-cart.service");
const shopping_cart_repository_service_1 = require("./shopping-cart-repository.service");
const shopping_cart_controller_1 = require("./shopping-cart.controller");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const address_module_1 = require("../address/address.module");
const cards_module_1 = require("../cards/cards.module");
const shopping_module_1 = require("../shopping/shopping.module");
const users_module_1 = require("../users/users.module");
const products_service_1 = require("../products/products.service");
const products_repository_service_1 = require("../products/products-repository.service");
const subscriptions_repository_service_1 = require("../shopping/subscriptions-repository.service");
const shared_module_1 = require("../../shared/shared/shared.module");
let ShoppingCartModule = class ShoppingCartModule {
};
ShoppingCartModule = __decorate([
    (0, common_1.Module)({
        controllers: [shopping_cart_controller_1.ShoppingCartControllerController],
        providers: [
            shopping_cart_service_1.ShoppingCartService,
            shopping_cart_repository_service_1.ShoppingCartRepositoryService,
            products_service_1.ProductsService,
            products_repository_service_1.ProductsRepositoryService,
            subscriptions_repository_service_1.SubscriptionsRepositoryService,
        ],
        imports: [
            jwt_1.JwtModule.register(constansts_1.jwtOptions),
            shared_module_1.SharedModule,
            address_module_1.AddressModule,
            cards_module_1.CardsModule,
            shopping_module_1.ShoppingModule,
            users_module_1.UsersModule,
        ],
        exports: [shopping_cart_service_1.ShoppingCartService],
    })
], ShoppingCartModule);
exports.ShoppingCartModule = ShoppingCartModule;
//# sourceMappingURL=shopping-cart.module.js.map