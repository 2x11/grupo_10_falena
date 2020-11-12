var express = require('express');
var router = express.Router();

const apiController = require('../controller/apiController')

router.post('/email', apiController.email)


module.exports = router