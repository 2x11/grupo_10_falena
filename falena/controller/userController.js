let userController = {
    login: (req, res, next)=>{
        res.render('login');
    },
    register: (req, res, next)=>{
        res.render('register');
    },
    cart: (req, res, next)=>{
        res.render('cart')
    }
}
module.exports = userController;