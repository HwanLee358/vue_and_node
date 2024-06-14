var express = require('express');
var path = require('path');
var router = express.Router();

const members = [
    { userid: "user1", userpw: "1111" },
    { userid: "user2", userpw: "2222" },
    { userid: "user3", userpw: "3333" },
]

router.get('/', (req,res) => {
    if(req.session.is_logined){
        const member = JSON.parse({userid : req.session.userid});
        return res.send(member);
    }
    res.send(401);
})

module.exports = router;
