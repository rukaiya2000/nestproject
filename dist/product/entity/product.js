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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = exports.Rating = void 0;
const typeorm_1 = require("typeorm");
var Rating;
(function (Rating) {
    Rating["zero"] = "0";
    Rating["one"] = "1";
    Rating["two"] = "2";
    Rating["three"] = "3";
    Rating["four"] = "4";
    Rating["five"] = "5";
})(Rating = exports.Rating || (exports.Rating = {}));
let Products = class Products {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Products.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "productModel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Products.prototype, "availibility", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Rating
    }),
    __metadata("design:type", String)
], Products.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Products.prototype, "productPrice", void 0);
Products = __decorate([
    (0, typeorm_1.Entity)()
], Products);
exports.Products = Products;
//# sourceMappingURL=product.js.map