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
const product_module_1 = require("./product/product.module");
const customer_module_1 = require("./customer/customer.module");
const order_module_1 = require("./order/order.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const dotenv = require("dotenv");
const customer_1 = require("./customer/entity/customer");
const order_1 = require("./order/entity/order");
const product_1 = require("./product/entity/product");
const common_2 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const redisStore = require("cache-manager-redis-store");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.SQL_HOST,
                port: +process.env.SQL_PORT,
                username: process.env.SQL_USERNAME,
                password: process.env.SQL_PASSWORD,
                database: process.env.SQL_DATABASE,
                entities: [product_1.Products, customer_1.Customers, order_1.CustomerOrder]
            }),
            product_module_1.ProductModule,
            customer_module_1.CustomerModule,
            order_module_1.OrderModule,
            auth_module_1.AuthModule,
            common_2.CacheModule.register({
                isGlobal: true,
                store: redisStore,
                socket: {
                    host: process.env.REDIS_HOST,
                    port: process.env.REDIS_PORT,
                }
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map