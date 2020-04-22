import {Test} from '@nestjs/testing';
import {ProductsController} from '../src/products/controllers/products.controller';
import {ProductsService} from '../src/products/services/products.service';
import {ProductEntity} from "../src/products/entity/product.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {ProductRepository} from "../src/products/repositories/ProductRepository";
import {Repository} from "typeorm";

describe('Products Controller', () => {
    let productController: ProductsController;
    let productService: ProductsService;
    let repo: Repository<ProductEntity>

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ProductRepository],
            controllers: [ProductsController],
            providers: [ProductsService, {
                provide: getRepositoryToken(ProductEntity),
                useClass: Repository,
            }, ProductRepository],
        }).compile();

        productController = module.get<ProductsController>(ProductsController);
        productService = module.get<ProductsService>(ProductsService);
        repo = module.get<Repository<ProductEntity>>(getRepositoryToken(ProductEntity));
    });

    describe('findAll', () => {
        it('should return all products', async () => {
            const result: ProductEntity[] = [
                {
                    "id": "2",
                    "title": "Masterning NestJS",
                    "description": "official book to learn and master NestJS",
                    "price": 23,
                    "unit": "$"
                }
            ];
            jest.spyOn(repo, 'find').mockResolvedValueOnce(result);
            jest.spyOn(productService, 'getAllProducts').mockImplementation(() => Promise.resolve(result));
            expect(await productController.getProducts()).toBe(result);
        });
    });
});
