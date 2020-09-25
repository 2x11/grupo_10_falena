/*
 * IMPORTAR LIBRERIA Y ARCHIVOS
 */
const path = require('path');
const fs = require('fs');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'),'utf-8');


module.exports = {
    index: function(req, res) {
        res.render('product', {
            title: 'Express',
            css: 'index.css',
            menu: 'admin',
            products: dbProducts
        });
    },
    
    listar:function(req,res){
        res.render('product',{
            title: 'productos',
            css:'index.css',
            menu: 'user',
            productos:dbProducts

        })
    },

    detail: function(req, res) {
        idProducto = req.params.id;
        let product = dbProducts.filter(producto => {
            return producto.id == idProducto
        })
        res.render('productDetail', {
            css: 'product.css',
            menu: 'user',
            product: product[0]
        });
    },
    add: function(req, res) {
        res.render('productAdd', {
            css: 'product.css',
            menu: 'admin'
        });
    },
    save: function(req, res, next) {
        let lastID = 1;
        dbProducts.forEach(producto => {
            if (producto.id > lastID) {
                lastID = producto.id
            }
        })
        let newProduct = {
            id: lastID + 1,
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
        fs.writeFileSync(path.join(__dirname, "..", "data", "product.json"), JSON.stringify(dbProducts), 'utf-8')
        res.redirect('/product')
    },

    editForm: (req, res) => {
        let prodToEdit;
        dbProducts.forEach(product => {
            if(product.id == req.params.id){
                prodToEdit = product;
            }          
        });
        res.render('productEdit', {
            css: 'product.css',
            menu: 'admin',
            prodToEdit:prodToEdit
        });
    },

    edit: (req,res)=>{
        dbProducts.forEach(product =>{
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.prece = req.body.prece;
                product.category = req.body.category;
                product.review = req.body.review;                
            };
        });

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'product.json'), JSON.stringify(dbProducts),'utf-8');

        res.redirect('/product/detail/' + req.params.id);
    },

    delete: (req, res) => {
        let idProducto;
        dbProducts.forEach(producto => {
            if (producto.id == req.params.id) {
                idProducto = dbProducts.indexOf(producto)
            }
        });
        dbProducts.splice(idProducto, 1);


        fs.writeFileSync(path.join(__dirname, "..", "data", "product.json"), JSON.stringify(dbProducts), 'utf-8')
        res.redirect('/product')
    }
}