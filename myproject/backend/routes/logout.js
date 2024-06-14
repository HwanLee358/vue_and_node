var express = require('express');
var path = require('path');
var router = express.Router();

const members = [
    { userid: "user1", userpw: "1111" },
    { userid: "user2", userpw: "2222" },
    { userid: "user3", userpw: "3333" },
  ]

router.post('/',(req,res) => {
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;
