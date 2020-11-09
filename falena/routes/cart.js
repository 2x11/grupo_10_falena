var express = require('express');
var router = express.Router();

const cartController = require('../controller/cartController')
const validaruser = require('../middlewares/validarVisitante')
let locasRol = require('../middlewares/locasRol');


router.get('/',  locasRol, validaruser , cartController.cart);


module.exports = router;