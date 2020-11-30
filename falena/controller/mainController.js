
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
               masVendidos: productsVendidos,
               visitados: productsVistados
           });
       })

   },
   search:function(req, res, next){
       db.Products.findAll({
           where:{
               [Op.or]: [
                   { name :{[Op.like] : `%${req.query.search}%` }},
                   { author :{[Op.like] : `%${req.query.search}%` }}
                ]
            }
        })
    .then(result => {
        res.render('search',{
            title: 'Falena',
            css: 'index.css',
            products: result
        })
    })
    .catch(e => {
        res.send(e)
    })
},
    genres:function(req, res){
        db.Categories.findAll()        
        .then(genre => {
            res.render('genres', {
                title: 'Falena',
                css: 'genres.css',
                genres: genre
            });
        })
    },
    recomendados:function(req, res){
        db.Products.findAll({
            where : {
                section : 'masVendidos'
            }
        })        
        .then(recomendados => {
            res.render('seccion', {
                title: 'Falena',
                css: 'index.css',
                products: recomendados
            });
        })
    },
    novedades:function(req, res){
        db.Products.findAll({
            where : {
                section : 'novedades'
            }
        })        
        .then(recomendados => {
            res.render('seccion', {
                title: 'Falena',
                css: 'index.css',
                products: recomendados
            });
        })
    },
    independientes:function(req, res){
        db.Products.findAll({
            where : {
                section : 'independientes'
            }
        })        
        .then(recomendados => {
            res.render('seccion', {
                title: 'Falena',
                css: 'index.css',
                products: recomendados
            });
        })
    },
    masvendido:function(req, res){
        db.Products.findAll({
            where : {
                section : 'recomendados'
            }
        })        
        .then(recomendados => {
            res.render('seccion', {
                title: 'Falena',
                css: 'index.css',
                products: recomendados
            });
        })
    },
    autores:function(req, res){
        db.Authors.findAll()
        .then(author => {                                                                                
            res.render('authors', { 
                title: 'Falena',
                css: 'genres.css',
                authors: author
            });
        })
    }

}