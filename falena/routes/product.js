var express = require('express');
var router = express.Router();

const multer = require('multer')
const path = require('path');


/*
* Importar Archivos
*/
let productController = require('../controller/productController')
let imageProduct = require('../middlewares/subirImagenProduct'); /* Multer */
let validarAdmin = require('../middlewares/validarAdmin')
let locasRol = require('../middlewares/locasRol');
let addProductValidator = require('../validations/addProductValidator') //valida formulario de agregar productos
/*
* Routes
*/
router.get('/',  locasRol, validarAdmin, productController.index);
/*router.get('/',productController.listar)*/

router.get('/detail/:id', locasRol,productController.detail);

router.get('/add',  locasRol,  validarAdmin,  productController.add);
router.post('/save', imageProduct.any(), addProductValidator, productController.save);
router.get('/edit/:id', locasRol,  validarAdmin, productController.editForm)
router.put('/edit/:id', imageProduct.any(), addProductValidator, productController.edit);

router.delete('/delete/:id',productController.delete)

module.exports = router;