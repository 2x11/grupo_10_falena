const {check,validationResult,body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('firstname')
    .isLength({min:1})
    .withMessage('Debes ingresar tu nombre'),

    check('lastname')
    .isLength({min:1})
    .withMessage('Debes ingresar tu apellido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .isLength({min:8,max:24})
    .withMessage('Debe ingresar una contraseña con mínimo 8 y un máximo de 24 caracteres'),

    body('passwordRepeat')
    .custom((value,{req}) =>{
        if (value != req.body.password) {
            return false;
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden'),

    
]