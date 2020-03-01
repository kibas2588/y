const util = require('util');
const mysql = require('mysql');
/**
 * Connection to the database.
 *  */
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b9460ec76f13c2', // use your mysql username.
    password: 'ee7f9d30', // user your mysql password.
    database: 'heroku_be8e0ee8709ef85'
});

pool.getConnection((err, connection) => {
    if(err) 
        console.error("Something went wrong connecting to the database ...");
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
