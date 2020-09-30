const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

// const {validationResult} = require('express-validator');


const dbUser = require(path.join(__dirname,'..','data','dbUser'))


module.exports = {
    login: (req, res, next)=>{
        res.render('login',{
            css: 'login.css',
            menu: 'user'
        });
    },
    loginProcess: (req, res, next)=>{

        
    },
    register: (req, res)=>{
        res.render('register',{
            css: 'register.css',
            menu: 'user'
        });
    },
    registerProcess:(req,res)=>{
        let lastID = 0;
        if(dbUser.length != 0){
            dbUser.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            });
        };
            let newUser = {
                id: lastID + 1,
                first_name: req.body.firstname.trim(),
                last_name: req.body.lastname.trim(),
                dni: req.body.dni.trim(),
                email: req.body.email.trim(),
                password:bcrypt.hashSync(req.body.password,10),
                rol:"user"
            }
            dbUser.push(newUser);
            fs.writeFileSync(path.join(__dirname,'..','data','dbUser.json'),JSON.stringify(dbUser),'utf-8')
    
            return res.redirect('/user/login');
       
    },
    cart: (req, res, next)=>{
        res.render('cart',{
            css: 'cart.css',
            menu: 'user'
        })
    }
}