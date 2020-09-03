module.exports = {
    detail: function(req, res, next){
        res.render('productDetail',{
            css: 'product.css'
        });
    },
    add: function(req, res, next){
        res.render('productAdd',{
            css: 'product.css'
        });
    }
}