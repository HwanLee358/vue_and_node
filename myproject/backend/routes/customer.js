const express = require('express');
const router = express.Router()
const query = require("../mysql") // 생략가능

router.get("/", async (req, res) => {
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);

    if(!page){ page = 1; }
    if(!pageUnit){ pageUnit = 10;}
    let offset = (page-1) * pageUnit;

    let list = await query("customerList",[offset, pageUnit]);
    let count = await query("customerCount");
    console.log(count)
    res.send({list,count});
})

router.post("/", (req, res) => {
    query("customerInsert", req.body)
    .then(result => res.send(result))
})
router.put("/:id", async (req, res) => {
    let result = await query("customerUpdate", [req.body, req.params.id]);
    res.send(result);
})
router.get("/:id", (req, res) =>{
    query("customerCheck", req.params.id)
    .then(result => res.send(result))
})
router.delete("/:id", (req, res) => {
    query("customerDelete", req.params.id)
    .then(result => res.send(result))
})

module.exports = router;