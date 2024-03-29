"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingModule = void 0;
const common_1 = require("@nestjs/common");
const shopping_controller_1 = require("./shopping.controller");
const shopping_service_1 = require("./shopping.service");
const orders_repository_service_1 = require("./orders-repository.service");
const subscriptions_repository_service_1 = require("./subscriptions-repository.service");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("../auth/constansts");
const open_pay_service_1 = require("../../core/services/open-pay/open-pay.service");
const wms_customer_requirement_repository_service_1 = require("./wms-customer-requirement-repository.service");
const products_module_1 = require("../products/products.module");
const users_module_1 = require("../users/users.module");
const shared_module_1 = require("../../shared/shared/shared.module");
const send_email_module_1 = require("../../core/services/send-email/send-email.module");
const memberships_service_1 = require("../memberships/memberships.service");
const memberships_repository_service_1 = require("../memberships/memberships-repository.service");
const address_module_1 = require("../address/address.module");
const cards_module_1 = require("../cards/cards.module");
let ShoppingModule = class ShoppingModule {
};
ShoppingModule = __decorate([
    (0, common_1.Module)({
        controllers: [shopping_controller_1.ShoppingController],
        providers: [
            shopping_service_1.ShoppingService,
            orders_repository_service_1.OrdersRepositoryService,
            subscriptions_repository_service_1.SubscriptionsRepositoryService,
            wms_customer_requirement_repository_service_1.WmsCustomerRequirementRepositoryService,
            open_pay_service_1.OpenPayService,
            memberships_service_1.MembershipsService,
            memberships_repository_service_1.MembershipsRepositoryService,
        ],
        imports: [
            jwt_1.JwtModule.register(constansts_1.jwtOptions),
            shared_module_1.SharedModule,
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            send_email_module_1.SendEmailModule,
            address_module_1.AddressModule,
            cards_module_1.CardsModule,
        ],
        exports: [shopping_service_1.ShoppingService],
    })
], ShoppingModule);
exports.ShoppingModule = ShoppingModule;
//# sourceMappingURL=shopping.module.js.map