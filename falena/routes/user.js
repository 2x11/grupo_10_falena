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

module.exports = router;