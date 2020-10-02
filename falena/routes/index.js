var express = require('express');
var router = express.Router();

const mainController = require('../controller/mainController')
const validaruser = require('../middlewares/validarVisitante')
let locasRol = require('../middlewares/locasRol');

/* GET home page. */
router.get('/',  locasRol, mainController.index);

router.get('/cart',  locasRol, validaruser , mainController.cart);

module.exports = router;
