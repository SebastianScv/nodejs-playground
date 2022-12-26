import { BaseRepository } from "./BaseRepository";
import Product from "../../models/Product";
import { IDatabase } from "../interfaces/IDatabase";

export class ProductsRepository extends BaseRepository<Product> {
    private static instance: ProductsRepository;
    private static database: IDatabase;
    private static readonly TABLE: string = 'products';
    private constructor(database: IDatabase) {
        if (!database) {
            console.error('Could not create ProductsRepository, database should be provided')
            return
        }
        super(database);
    }

    public static getInstance(): ProductsRepository{
        if(!ProductsRepository.instance) {
            ProductsRepository.instance = new ProductsRepository(this.database);
        }

        return ProductsRepository.instance;
    }

    public static setDatabase(database: IDatabase) {
        this.database = database
    }

    async deleteProduct(id: any) {
        return await super.delete(ProductsRepository.TABLE, id)
    }

    async findOne(id: any) {
        return await super.findOne(ProductsRepository.TABLE, id)
    }

    async findAll() {
        return await super.findAll(ProductsRepository.TABLE)
    }

    async createProduct(item: Product) {
        return await super.create(ProductsRepository.TABLE, item)
    }

    async editProduct(item: Product) {
        return await super.update(ProductsRepository.TABLE, item.id, item)
    }
}