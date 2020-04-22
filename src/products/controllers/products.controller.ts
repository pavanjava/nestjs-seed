import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {ProductsService} from "../services/products.service";
import {ProductDto} from "../dto/product.model";

@Controller('/api/v1/products')
export class ProductsController {

    constructor(private productsService: ProductsService) {
    }

    @Post()
    addProducts(@Body() product: ProductDto): {} {
        const generatedId = this.productsService.insertProduct(product);
        return {id: generatedId}
    }

    @Get()
    getProducts() {
        return this.productsService.getAllProducts();
    }

    @Get('/:id')
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(Number(id));
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(Number(id));
    }
}
