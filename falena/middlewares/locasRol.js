module.exports = function UserCheck(req,res,next){
    if(req.session.rol){
        res.locals.rol = req.session.rol
        next()
    }else{
        next()
    }
}