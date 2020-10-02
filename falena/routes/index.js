var express = require('express');
var router = express.Router();

const mainController = require('../controller/mainController')
const validaruser = require('../middlewares/validarVisitante')

/* GET home page. */
router.get('/', mainController.index);

router.get('/cart', validaruser , mainController.cart);

module.exports = router;
