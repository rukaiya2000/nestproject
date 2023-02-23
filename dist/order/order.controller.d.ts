import { OrderService } from './order.service';
export declare class OrderController {
    private readonly customerOrderService;
    constructor(customerOrderService: OrderService);
    getProduct(req: any, field: string): Promise<any>;
}
