const mysql = require('mysql2'); require('dotenv').config();
const connection = mysql.createConnection({
    host:'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports = connection;
// // 연결 테스트
// connection.connect();

// connection.query('SELECT * from Test_officer', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
// });

// connection.end();