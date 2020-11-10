
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
            products: resultado
        })
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
        db.Products.findAll({
            where : {
                section : 'autores'
            }
        })        
        .then(recomendados => {
            res.render('seccion', {
                title: 'Falena',
                css: 'index.css',
                products: recomendados
            });
        })
    }

}