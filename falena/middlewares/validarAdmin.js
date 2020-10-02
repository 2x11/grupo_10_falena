module.exports = function UserAdmin(req,res,next){
    if(req.session.rol == 'admin'){
        next()
    }else{
        res.redirect('/user/login')
        next()
    }
    
}