const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');
/*
 * IMPORTAR LIBRERIA Y ARCHIVOS
 */
const { reset } = require('nodemon');
const Sequelize = require('sequelize');
const db = require('../database/models');
let Op = Sequelize.Op;


module.exports = {
    login: (req, res, next) => {
        res.render('login', {
            css: 'login.css',
            script : 'login.js',
            title: 'Ingresar',
            user: req.session.user
        });
    },

    loginProcess: (req, res, next) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Users.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        nick: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        rol: user.rol,
                    }
                    if (req.body.remember) {
                        res.cookie('userFalena', req.session.user, { maxAge: 1000 * 60 * 60 })
                    }

                    res.locals.user = req.session.user

                    res.redirect('/')
                })

        } else {

            res.render('login', {
                title: "Ingresar",
                css: "login.css",
                errors: errors.mapped(),
                old: req.body,
                user: req.session.user
            })
        }
    },
    register: (req, res) => {
        res.render('register', {
            css: 'register.css',
            title: 'Registrarse',
            script: 'register.js',
            user: req.session.user
        });
    },
    registerProcess: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Users.create(

                {
                    first_name: req.body.firstname.trim(),
                    last_name: req.body.lastname.trim(),
                    email: req.body.email.trim(),
                    password: bcrypt.hashSync(req.body.password, 10),
                    dni : req.body.dni.trim(),
                    profile_picture: 'default-picture.png',
                    rol: "user"
                }

            )
                .then(e => {
                res.redirect('/user/login')
                })
                .catch(errores=>{
                    console.log(errores);
                })
        } else {
            res.render('register',{
                title : "Registro de Usuarios",
                css : 'register.css',
                user : db.Users,
                errors : errors.mapped(),
                old : req.body,
                user : req.session.user
            })
        }
    },

    logaut: function(req, res, next) {
        req.session.destroy();
        if(req.cookies.usuarioFalena){
            res.cookie('userFalena','',{ maxAge: -1})
        }
        res.redirect('/');
    },
    profile: (req, res, next) => {
            db.Users.findOne({
            where : {
                id : req.session.user.id
            }
        })
        .then( user => { 
            res.render('profile', {
                css: 'profile.css',
                user: user
            })
        })    
    },
    profileUpdate: (req, res, next) => {
        db.Users.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                dni: req.body.dni,
                phone_number: req.body.phone_number,
                adress: req.body.adress,
                zip_code: req.body.zip_code,
                email: req.body.email,
                profile_picture: (req.files[0])?req.files[0].filename: req.body.profile_picture
            },
            {
                where: {
                    id: req.params.id
                }            
            })        
            .then(resultado => {
                res.redirect('/user/profile');
            }).catch(err => {
                console.log(err)
            })
    },
    delete: (req, res) => {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result=>{
            req.session.destroy();
            if(req.cookies.usuarioFalena){
                res.cookie('userFalena','',{ maxAge: -1})
            }            
            res.redirect('/')
        })
     }

}