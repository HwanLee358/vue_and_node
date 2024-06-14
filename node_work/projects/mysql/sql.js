const boardSql = require('./boardSql')
const customerSql = require('./customerSql')
const todoSql = require('./todoSql')

module.exports = {
    ...boardSql,
    ...customerSql,
    ...todoSql
}