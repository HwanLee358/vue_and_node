const mysql = require('mysql2') // mysql 모듈 로드
const conn = { // mysql 접속 설정
    host: '127.0.0.1',
    port: '3306',
    user: 'hr',
    password: 'hr',
    database: 'test'
};
let connection = mysql.createConnection(conn); // DB 커넥션 생성
//let connection = mysql.createConnection('mysql://hr:pass01@192.168.10.71:3306/test?debug=true')
connection.connect();

sql = "SELECT * FROM customers";

connection.query(sql, function(err, results, fields){
    if(err) {
        console.log(err);
    }
    console.log(results);
});
connection.end(); // DB종료