import Sequelize from 'sequelize';
import { MySQLSequelizeDatabase } from '../../repositories/databases/MySQLSequelizeDatabase';

const createProduct = () => {
    return MySQLSequelizeDatabase.getSequelize().define('product', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false
        }
    });
}

export default createProduct;
