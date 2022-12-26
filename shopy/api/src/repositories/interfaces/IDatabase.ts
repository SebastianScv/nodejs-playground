export interface IDatabase {
    find(table: string, item: any): Promise<any[]>;
    findOne(table: string, id: string): Promise<any>;
    findAll(table: string): Promise<any[]>;
    create(table: string, item: any): Promise<boolean>;
    update(table: string, id: string, item: any): Promise<boolean>;
    delete(table: string, id: string): Promise<boolean>;
}