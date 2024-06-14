const mysql = require('mysql2') // mysql 모듈 로드
const conn = { // mysql 접속 설정
    connectionLimit: 10,
    host: '127.0.0.1',
    port: '3306',
    user: 'hr',
    password: 'hr',
    database: 'test'
};

const pool = mysql.createPool(conn);
let name = '홍길동'
let email = 'd@e.d'
let phone = '222-444'
let address = '대구 수구'

// sql = "insert into customers(name, email, phone, address) values(?,?,?,?)";
sql = "insert into customers set ? ";
const params = {name: '송씨', email: 'ekus@kur.ku', phone: '010-342-3212', address: '대구 방구'};

// pool.query(sql, [name,email,phone,address], function(err, results, fileds){
pool.query(sql, params, function(err, results, fileds){
    if(err){
        console.log(err);
    }
    console.log(results);
})
