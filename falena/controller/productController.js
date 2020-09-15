/*
* IMPORTAR LIBRERIA Y ARCHIVOS
*/
const path = require('path');
const fs = require('fs');
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
    },
    save: function(req, res, next){
        let lastID = 1;
        dbProducts.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        let newProduct = {
            id:lastID +1,
            author: req.body.author,
            name: req.body.name,
            prece: Number(req.body.prece),
            discount: Number(req.body.discount),
            review: req.body.review,
            category: req.body.category,
            section: req.body.section,
            image: req.files[0].filename
        }
        dbProducts.push(newProduct);
        fs.writeFileSync(path.join(__dirname,"..","data","product.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/product/add')        
    },














    edit: (req,res)=>{
        let productoAEditar;
        dbProducts.forEach(producto =>{
            if (producto.id == req.params.id){
                productoAEditar = producto
            }
        })
        res.render('productEdit', {producto:productoAEditar})
    },
    editForm: (req,res)=>{
       res.render('productEdit',{
           css: 'product.css',
           menu: 'admin'
       })
    },
    delete: (req,res)=>{
        let idProducto;
        dbProducts.forEach(producto => {
            if (producto.id == req.params.id) {
                idProducto = dbProducts.indexOf(producto)
            }
        });
        dbProducts.splice(idProducto, 1);
        
        dbProducts.push(newProduct);
        fs.writeFileSync(path.join(__dirname,"..","data","product.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/product/add')  
    }
}