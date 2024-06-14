module.exports = {
    boardList: `select * from board order by no limit ? , 10`,
    boardInsert: 'insert into board set ?',
    boardUpdate: `update board set ? where no = ?`,
    boardDelete: 'delete from board where no = ?',
    getBoard: 'select * from board where no = ?'
}