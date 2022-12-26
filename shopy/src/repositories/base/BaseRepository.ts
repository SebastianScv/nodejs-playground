import { IDatabase } from "../interfaces/IDatabase";

export abstract class BaseRepository<T> {

    constructor(private database: IDatabase) {}
    protected async create(table: string, item: any): Promise<boolean> {
        return await this.database.create(table, item)
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(table: string, id: string): Promise<T[]> {
        return await this.database.find(table, id)
    }
    async findOne(table: string, id: string): Promise<T> {
        return await this.database.findOne(table, id)
    }
    protected async findAll(table: string): Promise<T[]> {
        return await this.database.findAll(table)
    }
}