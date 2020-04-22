import {Module} from "@nestjs/common";
import {ProductsController} from "./controllers/products.controller";
import {ProductsService} from "./services/products.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductEntity} from "./entity/product.entity";
import {ProductRepository} from "./repositories/ProductRepository";

@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity, ProductRepository])],
    controllers:[ProductsController],
    providers:[ProductsService]
})
export class ProductsModule{}
