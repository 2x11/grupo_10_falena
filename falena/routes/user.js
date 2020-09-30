const express = require('express');
const router = express.Router();

/*
* Importar Archivos
*/
const userController = require('../controller/userController')


/*
* Routes
*/

router.get('/login', userController.login);
router.post('/login', userController.loginProcess);

router.get('/register', userController.register);
router.post('/register', userController.registerProcess);

module.exports = router;