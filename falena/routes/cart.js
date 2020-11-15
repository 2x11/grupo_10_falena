var express = require('express');
var router = express.Router();

const cartController = require('../controller/cartController')
const validarUser = require('../middlewares/validarVisitante')
let locasRol = require('../middlewares/locasRol');


router.get('/', locasRol, validarUser, cartController.cart);


module.exports = router;