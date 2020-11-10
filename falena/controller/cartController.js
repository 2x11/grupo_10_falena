
module.exports = {

    cart: (req, res, next) => {
        res.render('cart', {
            css: 'cart.css',
        })
    }
}

