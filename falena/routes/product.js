var express = require('express');
var router = express.Router();
/*
* Multer
*/
const multer = require('multer')
const path = require('path');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/libros')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
  }
})
    
var upload = multer({ storage: storage })

/*
* Importar Archivos
*/
let productController = require('../controller/productController')

/*
* Routes
*/
router.get('/', productController.index);

router.get('/detail/:id', productController.detail);

router.get('/add', productController.add);
router.post('/save', upload.any(), productController.save);


module.exports = router;