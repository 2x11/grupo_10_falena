const db = require('../database/models');

module.exports = {
    email : (req,res)=>{
        db.Users.findAll({
            attributes : [
                "email"
            ]
        })
        .then(emails => res.json(emails))
        .catch(e => res.send(e))
    }
}