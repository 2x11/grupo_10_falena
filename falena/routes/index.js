var express = require('express');
var router = express.Router();

const mainController = require('../controller/mainController')
const validaruser = require('../middlewares/validarVisitante')
let locasRol = require('../middlewares/locasRol');

/* GET home page. */
router.get('/',  locasRol, mainController.index);

router.post('/search',  locasRol, mainController.search);

router.get('/seccion/recomendados',  locasRol,  mainController.recomendados);
router.get('/seccion/novedades',  locasRol,  mainController.novedades);
router.get('/seccion/independientes',  locasRol,  mainController.independientes);
router.get('/seccion/masvendido',  locasRol,  mainController.masvendido);
router.get('/seccion/autores',  locasRol,  mainController.autores);


router.get('/cart',  locasRol, validaruser , mainController.cart);

module.exports = router;
