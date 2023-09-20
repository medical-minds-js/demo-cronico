"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_config_1 = require("./database.config");
const user_entity_1 = require("./entities/user/user.entity");
const profile_entity_1 = require("./entities/profile/profile.entity");
const type_media_entity_1 = require("./entities/type_media/type-media.entity");
const order_status_entity_1 = require("./entities/order-status/order-status.entity");
const order_product_status_entity_1 = require("./entities/order-product-status/order-product-status.entity");
const order_entity_1 = require("./entities/order/order.entity");
const order_product_entity_1 = require("./entities/order-products/order-product.entity");
const news_entity_1 = require("./entities/news/news.entity");
const news_media_entity_1 = require("./entities/news-media/news-media.entity");
const cards_entity_1 = require("./entities/cards/cards.entity");
const address_entity_1 = require("./entities/address/address.entity");
const ailment_entity_1 = require("./entities/ailments/ailment.entity");
const product_entity_1 = require("./entities/product/product.entity");
const product_images_entity_1 = require("./entities/product-images/product-images.entity");
const product_parts_entity_1 = require("./entities/product-parts/product-parts.entity");
const sale_entity_1 = require("./entities/sales/sale.entity");
const shopping_cart_entity_1 = require("./entities/shopping-carts/shopping-cart.entity");
const supply_entity_1 = require("./entities/supplies/supply.entity");
const deliveries_times_entity_1 = require("./entities/deliveries-times/deliveries-times.entity");
const ailment_images_entity_1 = require("./entities/ailments-images/ailment-images.entity");
const subscription_entity_1 = require("./entities/subscription/subscription.entity");
const subscription_status_entity_1 = require("./entities/subscription-status/subscription-status.entity");
const product_ailments_entity_1 = require("./entities/product-ailments/product-ailments.entity");
const wms_customer_requirement_entity_1 = require("./entities/wms-customer-requirement/wms-customer-requirement.entity");
const wms_customer_requirement_detail_entity_1 = require("./entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity");
const postal_code_entity_1 = require("./entities/postal-codes/postal-code.entity");
const address_deliveries_times_entity_1 = require("./entities/address-deliveries-times/address-deliveries-times.entity");
const supply_request_entity_1 = require("./entities/supply-requests/supply-request.entity");
const subscription_product_entity_1 = require("./entities/subscription-products/subscription-product.entity");
const subscription_product_status_entity_1 = require("./entities/subscription-product-status/subscription-product-status.entity");
const user_ailments_entity_1 = require("./entities/user-ailments/user-ailments.entity");
const user_ailments_product_entity_1 = require("./entities/user-ailments-product/user-ailments-product.entity");
const dose_taken_entity_1 = require("./entities/doses_taken/dose-taken.entity");
const order_subscription_entity_1 = require("./entities/order-subscription/order-subscription.entity");
const setting_entity_1 = require("./entities/settings/setting.entity");
const user_setting_entity_1 = require("./entities/user-setting/user-setting.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize(database_config_1.databaseConfig.database, database_config_1.databaseConfig.username, database_config_1.databaseConfig.password, {
                dialect: database_config_1.databaseConfig.dialect,
                host: database_config_1.databaseConfig.host,
                port: database_config_1.databaseConfig.port,
            });
            sequelize.addModels([
                profile_entity_1.ProfileEntity,
                type_media_entity_1.TypeMediaEntity,
                setting_entity_1.SettingEntity,
                user_entity_1.UserEntity,
                address_entity_1.AddressEntity,
                deliveries_times_entity_1.DeliveryTimeEntity,
                ailment_entity_1.AilmentEntity,
                ailment_images_entity_1.AilmentsImageEntity,
                product_ailments_entity_1.ProductAilmentsEntity,
                cards_entity_1.CardEntity,
                news_entity_1.NewsEntity,
                news_media_entity_1.NewsMediaEntity,
                product_entity_1.ProductEntity,
                product_images_entity_1.ProductImageEntity,
                product_parts_entity_1.ProductPartEntity,
                sale_entity_1.SaleEntity,
                order_entity_1.OrderEntity,
                order_status_entity_1.OrderStatusEntity,
                order_product_status_entity_1.OrderProductStatusEntity,
                order_product_entity_1.OrderProductEntity,
                shopping_cart_entity_1.ShoppingCartEntity,
                supply_entity_1.SupplyEntity,
                address_deliveries_times_entity_1.AddressDeliveryTimeEntity,
                subscription_status_entity_1.SubscriptionStatusEntity,
                subscription_entity_1.SubscriptionEntity,
                subscription_product_status_entity_1.SubscriptionProductStatusEntity,
                subscription_product_entity_1.SubscriptionProductEntity,
                order_subscription_entity_1.OrderSubscriptionEntity,
                postal_code_entity_1.PostalCodeEntity,
                supply_request_entity_1.SupplyRequestEntity,
                user_ailments_entity_1.UserAilmentsEntity,
                user_ailments_product_entity_1.UserAilmentsProductEntity,
                user_setting_entity_1.UserSettingEntity,
                dose_taken_entity_1.DoseTakenEntity,
                wms_customer_requirement_entity_1.WmsCustomerRequirementEntity,
                wms_customer_requirement_detail_entity_1.WmsCustomerRequirementDetailEntity,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map