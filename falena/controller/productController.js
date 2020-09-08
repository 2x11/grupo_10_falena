module.exports = {
    detail: function(req, res){
        res.render('productDetail',{
            css: 'product.css',
            menu: 'user'
        });
    },
    add: function(req, res){
        res.render('productAdd',{
            css: 'product.css',
            menu: 'admin'
        });
    }
}