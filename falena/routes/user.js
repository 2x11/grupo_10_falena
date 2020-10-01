const express = require('express');
const router = express.Router();

/*
* Importar Archivos
*/
const userController = require('../controller/userController')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')

/*
* Routes
*/

router.get('/login', userController.login);
router.post('/login',loginValidator ,userController.loginProcess);

router.get('/register', userController.register);
router.post('/register',registerValidator, userController.registerProcess);

module.exports = router;