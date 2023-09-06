"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("../../core/database/database.providers");
const ailment_entity_providers_1 = require("../../core/database/entities/ailments/ailment-entity.providers");
const dose_taken_entity_providers_1 = require("../../core/database/entities/doses_taken/dose-taken-entity.providers");
const order_product_entity_providers_1 = require("../../core/database/entities/order-products/order-product-entity.providers");
const order_subscription_entity_providers_1 = require("../../core/database/entities/order-subscription/order-subscription-entity.providers");
const order_entity_providers_1 = require("../../core/database/entities/order/order-entity.providers");
const product_images_entity_providers_1 = require("../../core/database/entities/product-images/product-images-entity.providers");
const product_entity_providers_1 = require("../../core/database/entities/product/product-entity.providers");
const shopping_cart_entity_providers_1 = require("../../core/database/entities/shopping-carts/shopping-cart-entity.providers");
const subscription_product_entity_providers_1 = require("../../core/database/entities/subscription-products/subscription-product-entity.providers");
const subscription_entity_providers_1 = require("../../core/database/entities/subscription/subscription-entity.providers");
const user_ailments_product_entity_providers_1 = require("../../core/database/entities/user-ailments-product/user-ailments-product-entity.providers");
const user_ailments_entity_providers_1 = require("../../core/database/entities/user-ailments/user-ailments-entity.providers");
const user_entity_providers_1 = require("../../core/database/entities/user/user-entity.providers");
const wms_customer_requirement_detail_entity_providers_1 = require("../../core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail-entity.providers");
const wms_customer_requirement_entity_providers_1 = require("../../core/database/entities/wms-customer-requirement/wms-customer-requirement-entity.providers");
const password_strategy_service_1 = require("../../core/services/password-strategy/password-strategy.service");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Module)({
        providers: [
            password_strategy_service_1.PasswordStrategyService,
            ...order_entity_providers_1.ordersProviders,
            ...order_product_entity_providers_1.orderProductProviders,
            ...subscription_entity_providers_1.subscriptionEntityProviders,
            ...subscription_product_entity_providers_1.subscriptionProductEntityProviders,
            ...wms_customer_requirement_entity_providers_1.wmsCustomerRequirementEntityProviders,
            ...wms_customer_requirement_detail_entity_providers_1.wmsCustomerRequirementDetailEntityProviders,
            ...order_subscription_entity_providers_1.ordersSubscriptionsProviders,
            ...shopping_cart_entity_providers_1.shoppingCartEntityProviders,
            ...product_entity_providers_1.productEntityProviders,
            ...product_images_entity_providers_1.productImageEntityProviders,
            ...ailment_entity_providers_1.ailmentEntityProviders,
            ...subscription_entity_providers_1.subscriptionEntityProviders,
            ...subscription_product_entity_providers_1.subscriptionProductEntityProviders,
            ...user_ailments_product_entity_providers_1.userAilmentsProductEntityProviders,
            ...user_entity_providers_1.userEntityProviders,
            ...user_ailments_entity_providers_1.userAilmentsEntityProviders,
            ...dose_taken_entity_providers_1.doseTakenEntityProviders,
            ...user_entity_providers_1.userEntityProviders,
            ...ailment_entity_providers_1.ailmentEntityProviders,
            ...database_providers_1.databaseProviders,
        ],
        exports: [
            password_strategy_service_1.PasswordStrategyService,
            ...order_entity_providers_1.ordersProviders,
            ...order_product_entity_providers_1.orderProductProviders,
            ...subscription_entity_providers_1.subscriptionEntityProviders,
            ...subscription_product_entity_providers_1.subscriptionProductEntityProviders,
            ...wms_customer_requirement_entity_providers_1.wmsCustomerRequirementEntityProviders,
            ...wms_customer_requirement_detail_entity_providers_1.wmsCustomerRequirementDetailEntityProviders,
            ...order_subscription_entity_providers_1.ordersSubscriptionsProviders,
            ...shopping_cart_entity_providers_1.shoppingCartEntityProviders,
            ...product_entity_providers_1.productEntityProviders,
            ...product_images_entity_providers_1.productImageEntityProviders,
            ...ailment_entity_providers_1.ailmentEntityProviders,
            ...subscription_entity_providers_1.subscriptionEntityProviders,
            ...subscription_product_entity_providers_1.subscriptionProductEntityProviders,
            ...user_ailments_product_entity_providers_1.userAilmentsProductEntityProviders,
            ...user_entity_providers_1.userEntityProviders,
            ...user_ailments_entity_providers_1.userAilmentsEntityProviders,
            ...dose_taken_entity_providers_1.doseTakenEntityProviders,
            ...user_entity_providers_1.userEntityProviders,
            ...ailment_entity_providers_1.ailmentEntityProviders,
            ...database_providers_1.databaseProviders,
        ],
        imports: [],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map