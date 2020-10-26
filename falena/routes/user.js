const express = require('express');
const router = express.Router();

/*
* Importar Archivos
*/
const userController = require('../controller/userController')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
let profilePicture = require('../middlewares/subirImagenProduct'); /* Multer */
let locasRol = require('../middlewares/locasRol');


/*
* Routes
*/

router.get('/login',  locasRol, userController.login);
router.post('/login',loginValidator ,userController.loginProcess);

router.get('/register',  locasRol, userController.register);
router.post('/register',registerValidator, userController.registerProcess);

router.get('/logout', userController.logaut);

router.get('/profile', userController.profile)
router.post('/profile', userController.profileUpdate)
// router.post('/save', profilePicture.any(), productController);
module.exports = router;