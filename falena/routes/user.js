const express = require('express');
const router = express.Router();

/*
* Importar Archivos
*/
const userController = require('../controller/userController')

/*
* Routes
*/

router.get('/login/', userController.login);
router.get('/register/', userController.register);
router.get('/cart', userController.cart);
module.exports = router;