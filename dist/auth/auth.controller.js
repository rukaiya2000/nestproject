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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const md5 = require("md5");
const enums_1 = require("@nestjs/common/enums");
const login_customer_1 = require("./dto/login-customer");
let AuthController = class AuthController {
    constructor(authService, jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async login(body) {
        const { email, password } = body;
        const customer = await this.authService.loginCustomer({ email });
        try {
            if (!customer) {
                throw new common_1.BadRequestException(" user doesn't exist");
            }
            if (md5(password) + '\r' !== customer.password) {
                throw new common_1.BadRequestException('invalid credentials.. check password');
            }
            const jwt_token = await this.jwtService.signAsync({
                email: customer.email,
            });
            return {
                status: enums_1.HttpStatus.OK,
                message: 'successfully logged in',
                jwt_token,
            };
        }
        catch (error) {
            return {
                error,
            };
        }
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.CacheInterceptor),
    (0, common_1.CacheTTL)(30),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_customer_1.LoginCustomer]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map