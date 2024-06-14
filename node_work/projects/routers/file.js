const express = require('express');
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'd:/uploads/' })

router.post('/upload', upload.array('avatar'), (req, res)=>{
    console.log("파일크기: ", req.files[0].size)
    console.log("파일위치: ", req.files[0].path)
    console.log("파일명: ", req.files[0].fieldname)
    console.log(req.body)
    res.send("ok")
})

module.exports = router;