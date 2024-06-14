module.exports = {
    customerList: `select * from customers limit ?, ?`,
    customerCount: 'select count(*) cnt from customers',
    customerInsert: 'insert into customers set ?',
    customerUpdate: `update customers set ? where id = ?`,
    customerCheck: 'select * from customers where id = ?',
    customerDelete: 'delete from customers where id = ?',
}