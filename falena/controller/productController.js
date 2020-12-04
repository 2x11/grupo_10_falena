/*
 * IMPORTAR LIBRERIA Y ARCHIVOS
 */
const { reset } = require('nodemon');
const Sequelize = require('sequelize');
const db = require('../database/models');
let Op = Sequelize.Op;
const  { validationResult }  = require('express-validator');

module.exports = {
    index: function(req, res) {
        db.Products.findAll()
        .then(Products => {
            res.render('product', {
                title: 'Express',
                css: 'index.css',
                script: 'product.js',
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
               //category : Products.Categories
            });
        })
    },
    add: function(req, res) {
            let pedidosCategories = db.Categories.findAll({
                order : [
                    ['name','ASC']
                ]
            })
            let pedidosAuthors = db.Authors.findAll()
            Promise.all([pedidosCategories,pedidosAuthors])
            .then( ([categories, authors ]) => {
                res.render('productAdd', {
                    css: 'product.css',
                    script: 'addproduct.js',
                    category: categories,
                    authors: authors
                });            
            })
    },
    save: function(req, res, next) {
        let errors = validationResult(req);

        if(errors.isEmpty()){

            db.Products.create({
                name: req.body.name,
                author_id: req.body.author_id,
                price: req.body.price,
                discount: req.body.discount,
                review: req.body.review,
                category_id: req.body.category,
                section: req.body.section,
                image: (req.files[0])?req.files[0].filename:"default_producto.jpg",
                rating: req.body.rating
            }).then(newProducts => {
                res.redirect('/product')            
            }) 

        }else{
            
            let pedidoCategories = db.Categories.findAll({
                order : [
                    ['name','ASC']
                ]
            })
            let pedidoAuthors = db.Authors.findAll()
            Promise.all([pedidoCategories,pedidoAuthors])
            .then( ([categories, authors ]) => {
                //console.log(req.session.user)
                res.render('productAdd', {
                    css: 'product.css',
                    script: 'addproduct.js',
                    category: categories,
                    authors: authors,
                    errors: errors.mapped(),
                    old: req.body,
                    user: req.session.user                
                });           
            })
            
        }               
    },

    editForm: (req, res) => {
        let pedidoProducts = db.Products.findByPk(req.params.id)
        let pedidosCategories = db.Categories.findAll();
        let pedidosAuthors = db.Authors.findAll()
        Promise.all([pedidoProducts,pedidosCategories,pedidosAuthors ])
        .then(([products, categories, authors]) => {
            res.render('productEdit', {
                css: 'product.css',
                script: 'editproduct.js',
                products:products,
                category: categories,
                authors: authors
            });            
        })

    },

    edit: (req,res)=>{
        let errors = validationResult(req);

        if(errors.isEmpty()){

            db.Products.update({
                name: req.body.name,
                author_id: req.body.author_id,
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
        }else{

            let pedidoProducts = db.Products.findByPk(req.params.id)
            let pedidosCategories = db.Categories.findAll();
            let pedidosAuthors = db.Authors.findAll()
            Promise.all([pedidoProducts,pedidosCategories,pedidosAuthors ])
            .then(([products, categories]) => {
                res.render('productEdit', {
                    css: 'product.css',
                    script: 'editproduct.js',
                    product : db.Products,
                    products:products,
                    category: categories,
                    authors: authors,
                    errors: errors.mapped(),
                    old: req.body,                    
                });            
            })
          
        }     
        
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