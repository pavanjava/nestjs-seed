import {Module} from '@nestjs/common';
import {ProductsModule} from "./products/products.module";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [ProductsModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        migrations: ['migrations/*.ts'],
    })],
    controllers: [],
    providers: [],
})
export class AppModule {
}
