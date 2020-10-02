const dbUser = require('../data/dbUser');

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    
    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    check('password')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),

    body('email')
    .custom(function(value){
        let usuario = dbUser.filter(user=>{
            return user.email == value
        })
        if(usuario == false){
            return false
        }else{
            return true
        }
    })
    .withMessage("El ususario no está registrado"),

    body('password')
    .custom(function(value,{req}){
        let result = true;
        dbUser.forEach(user => {
            if(user.email == req.body.email){
                if(!bcrypt.compareSync(value,user.password)){
                    result = false
                }
            }
        });
        if (result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('Contraseña incorrecta')
]