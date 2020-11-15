module.exports = function(req, res, next) {
    if(!req.session.user || req.session.user.rol !== 'admin'){
        res.redirect('/user/login')
        next()
    }
    else{
        next()
    }
}