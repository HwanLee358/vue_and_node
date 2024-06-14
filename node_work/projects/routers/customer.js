const express = require('express');
const router = express.Router()
const query = require("../mysql") // 생략가능

router.get("/", (req, res) => {
    query('customerList')
    .then(result => res.send(result))
})
router.post("/", (req, res) => {
    query("customerInsert", req.body)
    .then(result => res.send(result))
})
router.put("/", async (req, res) => {
    let result = await query("customerUpdate", req.body.param);
    res.send(result);
})
router.delete("/:id", (req, res) => {
    query("customerDelete", req.params.id)
    .then(result => res.send(result))
})

module.exports = router;