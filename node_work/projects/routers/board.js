const express = require('express');
const router = express.Router()
const query = require('../mysql');

const multer = require('multer')
const upload = multer({ dest: 'd:/uploads/' })

router.get("/", (req, res) => {
    console.log(new Date(req.requestTime).toLocaleDateString())
    console.log(req.query.page);
    let page = Number(req.query.page)
    page = (page-1) * 10
    query('boardList', page)
    .then(result => res.send(result))
})

router.get("/:no", (req, res) => {
    // console.log('no: ', req.params.no)
    // const no = req.params.no
    // let result = board.find(ele => ele.no == no);
    query('getBoard',req.params.no)
    .then(result => res.send(result))
})

router.post("/", upload.single("avata"), (req, res) => {
    //첨부파일이 있으면
    let data = {...req.body}
    if(data > 0){
        // data.filename = req.file
    }
    query('boardInsert', req.body)
    .then(result => res.send(result))
})
router.put("/:no", async (req, res) => {
    // const no = req.params.no;
    // board = board.map(obj => obj.no == no? {...obj, ...req.body} : obj)
    let result = await query('boardUpdate', [req.body, req.params.no])
    res.send(result)    
})
router.delete("/:no", (req, res) => {
    // const no = req.params.no;
    // board = board.filter(obj => obj.no != no)
    query('boardDelete', req.params.no)
    .then(result => res.send(result))
})


module.exports = router;