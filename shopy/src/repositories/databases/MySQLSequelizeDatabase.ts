import createProduct from "../../models/Sequelize/Product";
import { IDatabase } from "../interfaces/IDatabase";

const Sequelize = require('sequelize');

export class MySQLSequelizeDatabase implements IDatabase {
    private static _connection: any;
    private static _sequelize: any;

    private _tableModelMap: Map<string, any>;

    private _product: any;

    constructor() {
        this._tableModelMap = new Map();

        MySQLSequelizeDatabase.getSequelize()
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err: any) => {
                console.error('Unable to connect to the database:', err);
            });
        
        this.buildSequelizeEntities()
    }

    public static getConnection() {
        return this._connection
    }
    public static getSequelize() {
        if (!this._sequelize) {
            this._sequelize = new Sequelize('shopy', 'root', 'password', {
              host: 'db',
              dialect: 'mysql',
            });
        }

        return this._sequelize
    }

    buildSequelizeEntities() {
        this._tableModelMap.set('products', createProduct());
    }

    find(table: string, item: any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    findOne(table: string, id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findAll(table: string): Promise<any[]> {
        const tableModel = this._tableModelMap.get(table);
        if (!tableModel) {
          throw new Error(`Unrecognized table: ${table}`);
        }
      
        try {
          const records = await tableModel.findAll();
          return records;
        } catch (err) {
          return [];
        }
    }      
    async create(table: string, item: any): Promise<boolean> {
        if (table === 'products') {
          try {
            const res = await this._product.create(item);
            console.log(res)
            return true;
          } catch (err) {
            return false;
          }
        }
      
        throw new Error(`Unrecognized table: ${table}`);
    }
    update(table: string, id: string, item: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(table: string, id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}