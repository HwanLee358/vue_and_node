module.exports = {
    boardList: `select * from board order by no limit ? , ?`,
    boardCount: 'select count(*) cnt from board',
    boardInsert: 'insert into board set ?',
    boardUpdate: `update board set ? where no = ?`,
    boardDelete: 'delete from board where no = ?',
    getBoard: 'select * from board where no = ?'
}