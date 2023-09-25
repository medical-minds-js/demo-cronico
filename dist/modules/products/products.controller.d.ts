import { SuccessListResponse } from 'src/core/clases/success-list.response';
import { SuccessResponse } from 'src/core/clases/success.response';
import { ProductFilters } from './interfaces/product-filters';
export declare class ProductsController {
    private readonly productsService;
    getProducts(filters: ProductFilters): Promise<SuccessListResponse>;
    getProductById(params: any): Promise<SuccessResponse>;
    getAilmentById(params: any): Promise<SuccessResponse>;
}
