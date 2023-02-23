"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_1 = require("../customer/entity/customer");
const product_1 = require("../product/entity/product");
const typeorm_2 = require("typeorm");
const order_1 = require("./entity/order");
let OrderService = class OrderService {
    constructor(customerOrderRepo, customerRepo, productRepo) {
        this.customerOrderRepo = customerOrderRepo;
        this.customerRepo = customerRepo;
        this.productRepo = productRepo;
    }
    getAll() {
        return this.customerOrderRepo.find();
    }
    async getProduct(email, field) {
        try {
            const productId = await this.customerOrderRepo.find({
                select: {
                    productId: true,
                },
                where: {
                    email: email,
                },
            });
            const productDetail = await this.productRepo.find({
                select: {
                    productId: field.includes('productId'),
                    productName: field.includes('productName'),
                    productModel: field.includes('productModel'),
                    productPrice: field.includes('productPrice'),
                    availibility: field.includes('availability'),
                    rating: field.includes('rating'),
                    type: field.includes('type'),
                },
                where: {
                    productId: productId[0].productId,
                },
            });
            const customerDetail = await this.customerRepo.find({
                select: {
                    customerID: field.includes('customerID'),
                    name: field.includes('name')
                },
                where: {
                    email: email,
                },
            });
            const res = {
                success: true,
                message: 'statement executed successfully',
                data: {
                    customerDetail: customerDetail[0].customerID,
                    productDetail: productDetail
                },
            };
            return res;
        }
        catch (err) {
            return err;
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_1.CustomerOrder)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_1.Customers)),
    __param(2, (0, typeorm_1.InjectRepository)(product_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map