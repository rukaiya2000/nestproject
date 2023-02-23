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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("cache-manager");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
        this.randomNumDbs = Math.floor(Math.random() * 10);
        this.memoryCache = (0, cache_manager_1.memoryStore)({ ttl: 10000 });
    }
    async setNumber() {
        const val = await this.memoryCache.get('number');
        if (val) {
            return {
                data: val,
                FromRedis: 'this is loaded from redis cache',
            };
        }
        if (!val) {
            await this.memoryCache.set('number', this.randomNumDbs);
            return {
                data: this.randomNumDbs,
                FromRandomNumDbs: 'this is loaded from randomNumDbs',
            };
        }
    }
    async getDetailsOfProducts(req) {
        const builder = this.productsService.queryBuilder('Product');
        try {
            if (req.query.rating) {
                builder.where('Product.rating LIKE :rating', {
                    rating: `%${req.query.rating}%`,
                });
            }
        }
        catch (error) {
            return (' an error happened... please try again later... the error is ' + error);
        }
        try {
            if (req.query.name) {
                builder.where('Product.productName LIKE :name', {
                    name: `%${req.query.name}%`,
                });
            }
        }
        catch (error) {
            return ('an error happened... please try again later... the error is ' + error);
        }
        try {
            if (req.query.model) {
                builder.where('Product.productModel LIKE :model', {
                    model: `%${req.query.model}%`,
                });
            }
        }
        catch (error) {
            return ('an error happened... please try again later... the error is ' + error);
        }
        try {
            if (req.query.type) {
                builder.where('Product.type LIKE :type', {
                    type: `%${req.query.type}%`,
                });
            }
        }
        catch (error) {
            return ('an error happened... please try again later... the error is ' + error);
        }
        try {
            const sort = req.query.sort;
            if (sort) {
                builder.orderBy('Product.productPrice', sort.toUpperCase());
            }
        }
        catch (error) {
            return ('an error happened... please try again later... the error is ' + error);
        }
        try {
            const page = parseInt(req.query.page) || 1;
            const perPage = 5;
            builder.offset((page - 1) * perPage).limit(perPage);
            const total = await builder.getCount();
            return {
                data: await (await builder).getMany(),
                page,
                total,
            };
        }
        catch (error) {
            return ('an error happened... please try again later... the error is ' + error);
        }
    }
};
__decorate([
    (0, common_1.Get)('cache'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "setNumber", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getDetailsOfProducts", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductsService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map