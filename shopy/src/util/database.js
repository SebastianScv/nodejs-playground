const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    database: 'shopy',
    password: 'password',
});

module.exports = pool.promise();
