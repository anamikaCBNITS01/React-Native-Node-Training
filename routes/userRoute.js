const express = require("express")
const router = express.Router();
const user = require('../modal/user')
const mongoose = require('mongoose');
const {db} = require('../modal/user');
const { ObjectId } = require('mongodb');
const User = require("../modal/user");


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'user get request'
    })
});


router.get('/todos/:userId', async (req, res) => {

    console.log(req.params.userId)

    const data = await db.collection('users').find().toArray(function (reqst, resp) {

        if (resp.length > 0) {
            res.send(resp)
        } else {
            res.send({ result: "No Products found" })
        }
    })


})


module.exports = router;