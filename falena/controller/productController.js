/*
 * IMPORTAR LIBRERIA Y ARCHIVOS
 */
const { reset } = require('nodemon');
const Sequelize = require('sequelize');
const db = require('../database/models');
let Op = Sequelize.Op;


module.exports = {
    index: function(req, res) {
        db.Products.findAll()
        .then(Products => {
            res.render('product', {
                title: 'Express',
                css: 'index.css',
                products: Products
            });            
        })
    },
    detail: function(req, res) {
        db.Products.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'Categories'
                }
            ]            
        }).then( Products => {
            res.render('productDetail', {
                css: 'product.css',
                product: Products,
                category : Products.Categories
            });
        })
    },
    add: function(req, res) {
        db.Categories.findAll({
            order : [
                ['name','ASC']
            ]
        })
        .then(categories => {
            res.render('productAdd', {
                css: 'product.css',
                category: categories
            });            
        })
    },
    save: function(req, res, next) {
         db.Products.create({
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            discount: req.body.discount,
            review: req.body.review,
            category_id: req.body.category,
            section: req.body.section,
            image: req.files[0].filename,
            rating: req.body.rating
        }).then(newProducts => {
            res.redirect('/product')            
        })    
    },

    editForm: (req, res) => {
        let pedidoProducts = db.Products.findByPk(req.params.id)
        let pedidosCategories = db.Categories.findAll();

        Promise.all([pedidoProducts,pedidosCategories ])
        .then(([products, categories]) => {
            res.render('productEdit', {
                css: 'product.css',
                products:products,
                category: categories
            });            
        })

    },

    edit: (req,res)=>{
        db.Products.update({
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            discount: req.body.discount,
            review: req.body.review,
            category_id: req.body.category,
            section: req.body.section,
            image: (req.files[0])?req.files[0].filename: req.body.imagen,
            rating: req.body.rating        
        },
        {
            where: {
            id: req.params.id
            }            
        })
        .then(resultado => {
            res.redirect('/product');
        }).catch(err => {
            console.log(err)
        }) 
        
    },

    delete: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result=>{
            res.redirect('/product')
        })
     }
}