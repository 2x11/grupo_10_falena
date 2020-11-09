const express = require('express');
const router = express.Router();

/*
* Importar Archivos
*/
const userController = require('../controller/userController')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
let profilePicture = require('../middlewares/profilePicture'); /* Multer */
let locasRol = require('../middlewares/locasRol');


/*
* Routes
*/

router.get('/login',  locasRol, userController.login);
router.post('/login',loginValidator ,userController.loginProcess);

router.get('/register',  locasRol, userController.register);
router.post('/register',registerValidator, userController.registerProcess);

router.get('/logout', userController.logaut);

router.get('/profile', locasRol, userController.profile)
router.put('/profile/:id', profilePicture.any(), userController.profileUpdate)

router.delete('/profile/delete/:id',userController.delete)

// router.post('/save', profilePicture.any(), productController);
module.exports = router;