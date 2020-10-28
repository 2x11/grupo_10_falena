
const Sequelize = require('sequelize');
const db = require('../database/models');
let Op = Sequelize.Op;

module.exports = {
    index: function (req, res, next) {
        let masVendidos = db.Products.findAll({
           where : {
               section : 'masVendidos'
           }
       })
       let visitados = db.Products.findAll({
           where : {
               section : 'ultimaVisita'
           }
       })        
       Promise.all([masVendidos,visitados ])         
       .then(([productsVendidos, productsVistados]) => {
           res.render('index', {
               title: 'Falena',
               css: 'index.css',
               menu:'user',
               masVendidos: productsVendidos,
               visitados: productsVistados
           });
       })

   },
   search:function(req, res, next){
    db.Products.findAll({
        where: {
            name:{
                [Op.substring]: req.body.search
            } 
        }
    })
    .then(resultado => {
        res.render('search',{
            title: 'Falena',
            css: 'index.css',
            menu:'user',                
            products: resultado
        })
    })  
   },
    cart: (req, res, next)=>{
        res.render('cart',{
            css: 'cart.css',
            menu: 'user'
        })
    }
}