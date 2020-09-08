let userController = {
    login: (req, res, next)=>{
        res.render('login',{
            css: 'login.css',
            menu: 'user'
        });
    },
    register: (req, res, next)=>{
        res.render('register',{
            css: 'register.css',
            menu: 'user'
        });
    },
    cart: (req, res, next)=>{
        res.render('cart',{
            css: 'cart.css',
            menu: 'user'
        })
    }
}
module.exports = userController;