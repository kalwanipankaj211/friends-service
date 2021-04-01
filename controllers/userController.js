const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
var userService = require('../services/userService.js');
router.post('/createUser', (req, res) => {
    var result = userService.createUser(req, res);
    result
        .then(event => {
            res.send(event);
        })
        .catch(err => {
            console.log("error is", err)
            res.send(err)
        })
})
router.get('/getAllUsers', (req, res) => {
    var result = userService.getAllUsers();
    result
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})
router.get('/getUserById', (req, res) => {
    var userId = req.params.userId;
    var result = userService.getUserById(userId);
    result
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = router;