// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '295q6722822'
// });


// module.exports = pool.promise();
//const Sequelize = require('sequelize');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '295q6722822', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;