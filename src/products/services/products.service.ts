import {Injectable, NotFoundException} from "@nestjs/common";
import {ProductDto} from "../dto/product.model";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductRepository} from "../repositories/ProductRepository";

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(ProductRepository) private readonly productRepo: ProductRepository) {
    }

    insertProduct = async (product: ProductDto) => {
        await this.productRepo.saveProduct(product);
        return product.id;
    }

    getAllProducts = async () => {
        return await this.productRepo.getProducts();
    }

    getProductById = async (id: number) => {
        return await this.productRepo.getProductById(id);
    }

    deleteProduct = async (id: number) => {
        return await this.productRepo.deleteProduct(id);
    }
}
