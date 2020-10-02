var express = require('express');
var router = express.Router();

const multer = require('multer')
const path = require('path');


/*
* Importar Archivos
*/
let productController = require('../controller/productController')
let imageProduct = require('../middlewares/subirImagenProduct'); /* Multer */
/*
* Routes
*/
router.get('/', productController.index);
/*router.get('/',productController.listar)*/

router.get('/detail/:id', productController.detail);

router.get('/add',  productController.add);
router.post('/save', imageProduct.any(), productController.save);
router.get('/edit/:id', productController.editForm)
router.put('/edit/:id', productController.edit);

router.delete('/delete/:id',productController.delete)

module.exports = router;