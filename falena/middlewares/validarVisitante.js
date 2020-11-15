module.exports = function Uservistas(req,res,next){
    if(!req.session.user || req.session.user.rol !== 'user'){
        res.redirect('/user/login')
        next()
    }else{
        next()
    }
    
}