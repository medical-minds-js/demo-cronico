"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const path_1 = require("path");
const database_module_1 = require("./core/database/database.module");
const products_module_1 = require("./modules/products/products.module");
const auth_module_1 = require("./modules/auth/auth.module");
const home_module_1 = require("./modules/home/home.module");
const about_module_1 = require("./modules/about/about.module");
const shopping_cart_module_1 = require("./modules/shopping-cart/shopping-cart.module");
const address_module_1 = require("./modules/address/address.module");
const deliveries_times_module_1 = require("./modules/deliveries-times/deliveries-times.module");
const shared_module_1 = require("./shared/shared/shared.module");
const password_strategy_service_1 = require("./core/services/password-strategy/password-strategy.service");
const cards_module_1 = require("./modules/cards/cards.module");
const shopping_module_1 = require("./modules/shopping/shopping.module");
const subscriptions_module_1 = require("./modules/subscriptions/subscriptions.module");
const postal_codes_module_1 = require("./modules/postal-codes/postal-codes.module");
const ailments_controller_1 = require("./modules/ailments/ailments.controller");
const ailments_module_1 = require("./modules/ailments/ailments.module");
const send_email_module_1 = require("./core/services/send-email/send-email.module");
const comments_module_1 = require("./modules/comments/comments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
                renderPath: '/uploads',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'downloads'),
                serveRoot: '/downloads',
                renderPath: '/downloads',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                serveRoot: '/',
                renderPath: '/',
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            address_module_1.AddressModule,
            products_module_1.ProductsModule,
            shopping_cart_module_1.ShoppingCartModule,
            auth_module_1.AuthModule,
            home_module_1.HomeModule,
            about_module_1.AboutModule,
            deliveries_times_module_1.DeliveriesTimesModule,
            shared_module_1.SharedModule,
            cards_module_1.CardsModule,
            shopping_module_1.ShoppingModule,
            subscriptions_module_1.SubscriptionsModule,
            postal_codes_module_1.PostalCodesModule,
            ailments_module_1.AilmentsModule,
            send_email_module_1.SendEmailModule,
            comments_module_1.CommentsModule,
        ],
        controllers: [app_controller_1.AppController, ailments_controller_1.AilmentsController],
        providers: [app_service_1.AppService, password_strategy_service_1.PasswordStrategyService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map