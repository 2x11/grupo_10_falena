const path = require('path');
const fs = require('fs');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'), 'utf-8' );

const dbUser = require(path.join(__dirname, '..', 'data', 'dbUser'), 'utf-8' );
module.exports = {
    index: function (req, res) {
         let masVendidos = dbProducts.filter(producto => {
             return producto.section == "masVendidos"
         })

         let visitados = dbProducts.filter(producto => {
            return producto.section == "ultimaVisita"
         })
         

        res.render('index', {
            title: 'Falena',
            css: 'index.css',
            menu:'user',
            user : dbUser,
            masVendidos: masVendidos,
            visitados: visitados
        });
    },
    cart: (req, res, next)=>{
        res.render('cart',{
            css: 'cart.css',
            menu: 'user'
        })
    }
}