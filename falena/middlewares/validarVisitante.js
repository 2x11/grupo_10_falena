module.exports = function Uservistas(req,res,next){
    if(req.session.rol == 'user'){
        next()
    }else{
        res.redirect('/user/login')
        next()
    }
    
}