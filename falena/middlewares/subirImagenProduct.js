const multer = require('multer')
const path = require('path');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/libros')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
  }
})

module.exports = multer({ storage: storage })