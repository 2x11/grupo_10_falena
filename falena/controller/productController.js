/*
* IMPORTAR LIBRERIA Y ARCHIVOS
*/
const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'));
const dbCategory = require(path.join(__dirname,'..','data','dbCategory'));


module.exports = {
    index: function(req, res) {
        res.render('product', { 
            title: 'Express', 
            css: 'index.css', 
            menu: 'admin',
            products: dbProducts 
        });
    },    
    detail: function(req, res){
        idProducto = req.params.id;
        let product = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('productDetail',{
            css: 'product.css',
            menu: 'user',
            product: product[0]
        });
    },
    add: function(req, res){
        res.render('productAdd',{
            css: 'product.css',
            menu: 'admin'
        });
    }
}