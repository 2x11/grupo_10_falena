var express = require('express');
var router = express.Router();

/*
* Importar Archivos
*/
let productController = require('../controller/productController')

/*
* Routes
*/
router.get('/detail/1', productController.detail);
router.get('/add', productController.add);


module.exports = router;