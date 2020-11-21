const db = require('../database/models');

const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('name')
    .isLength({min:3})
    .trim()
    .withMessage('Debes ingresar titulo con al menos 4 letras'),

    check('author')
    .isLength({min:3})
    .trim()
    .withMessage('Debes ingresar Autor con al menos 3 letras'),

    check('review')
    .isLength({min:20})
    .trim()
    .withMessage('Debes ingresar una descripcion del producto con al menos 20 caracteres'), 

    check('price')
    .isNumeric({min:1})
    .withMessage('Debes ingresar un precio'),

    check('discount')
    .isNumeric({min:1})
    .withMessage('Debes ingresar un descuento del producto'),

    check('rating')
    .isNumeric({min:1})
    .withMessage('Debes ingresar un precio'),
    
]