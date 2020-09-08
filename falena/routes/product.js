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

router.get('/', function(req, res) {
    res.render('product', { 
        title: 'Express', 
        css: 'index.css', 
        menu: 'admin' 
    });
  });

module.exports = router;