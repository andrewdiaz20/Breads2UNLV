const express = require('express')
const breads = express.Router()
const Bread = require("../models/bread.js")

//https://localhost:3000/breads/
breads.get('/', (res, req) => {
    res.send('This is the index of /breads')
})

//show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads

