let userController = {
    login: (req, res, next)=>{
        res.render('login',{
            css: 'login.css'
        });
    },
    register: (req, res, next)=>{
        res.render('register',{
            css: 'register.css'
        });
    },
    cart: (req, res, next)=>{
        res.render('cart',{
            css: 'cart.css'
        })
    }
}
module.exports = userController;