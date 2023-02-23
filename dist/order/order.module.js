"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OrderModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_module_1 = require("../customer/customer.module");
const customer_1 = require("../customer/entity/customer");
const product_1 = require("../product/entity/product");
const product_module_1 = require("../product/product.module");
const order_1 = require("./entity/order");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
let OrderModule = OrderModule_1 = class OrderModule {
};
OrderModule = OrderModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_1.CustomerOrder, customer_1.Customers, product_1.Products]), customer_module_1.CustomerModule, product_module_1.ProductModule],
        providers: [order_service_1.OrderService],
        controllers: [order_controller_1.OrderController],
        exports: [OrderModule_1]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map