const {check,validationResult,body} = require('express-validator');
const dbUser = require('../data/dbUser')
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
/*
    no funciona
    body('email')
    .custom(function(value,{req}){
        return db.Users.findOne({
            where : {
                email : req.body.email
            }
        })
        .then( user => {
            if(user.email == req.body.email){
                return Promise.reject('El email ya esta registrado')
            }else{
                return true
            }
        })
    })    
    .withMessage('Esta dirección de email ya está registrada'),
*/
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