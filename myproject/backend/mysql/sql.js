const customerSql = require('./customerSql')
const boardSql = require('./boardSql')
module.exports = {
    ...customerSql,
    ...boardSql
}