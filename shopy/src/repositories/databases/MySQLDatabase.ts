import { IDatabase } from "../interfaces/IDatabase";

const mysql = require('mysql2');

export class MySQLDatabase implements IDatabase {
    private _connection: any;

    constructor() {
        const pool = mysql.createPool({
            host: 'db',
            user: 'root',
            database: 'shopy',
            password: 'password',
        });

        this._connection = pool.promise()
        console.log('Connected successfully to DB.')
    }
    async create(table: string, item: any): Promise<boolean> {
        try {
            const [columns, values] = this.getKeysAndValues(item);
            const placeholders = columns.map(() => '?').join(', ');
            const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
        
            await this._connection.execute(query, values);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }      
    async find(table: string, item: any): Promise<any[]> {
        try {
            const [columns, values] = this.getKeysAndValues(item);
			const placeholders = columns.map(() => '?').join(', ');
			const query = `SELECT * FROM ${table} WHERE (${columns.join(', ')}) = (${placeholders})`;
		
			const [rows] = await this._connection.execute(query, values);
			return rows;
        } catch (error) {
			console.log(error);
			return [];
        }
    }      
    async findOne(table: string, id: string): Promise<any> {
        try {
			const [rows] = await this._connection.execute(`SELECT * FROM ${table} WHERE id = ?`, [id]);
			return rows[0];
        } catch (error) {
			console.log(error);
			return null;
        }
    }
    async findAll(table: string): Promise<any[]> {
        try { 
            const [rows, fields] = await this._connection.execute(`SELECT * FROM ${table}`);
            return rows;
        } catch (error) {
            console.log(error)
            return []
        }
    }
    async update(table: string, id: string, item: any): Promise<boolean> {
        try {
            const [columns, values] = this.getKeysAndValues(item);
            const updates = columns.map((column) => `${column} = ?`).join(', ');
            const query = `UPDATE ${table} SET ${updates} WHERE id = ?`;
            values.push(id);
        
            await this._connection.execute(query, values);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }      
    async delete(table: string, id: string): Promise<boolean> {
        try {
			await this._connection.execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
			return true;
        } catch (error) {
          console.log(error);
          	return false;
        }
    }      
    private getKeysAndValues(obj: any): [string[], any[]] {
        return [Object.keys(obj), Object.values(obj)];
    }  
}