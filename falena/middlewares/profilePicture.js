const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      callback(null, './public/images/user')
  },
  filename: (req, file, callback) => {
      req.fileSave = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      callback(null, req.fileSave)
  }
});
const fileFilter = function(req, file,callback) {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
      req.fileValidationError = "Solo Images";
      return callback(null,false,req.fileValidationError);
  }
  callback(null,true);
}

const upload =  multer({
  storage: storage,
  fileFilter:fileFilter
})


module.exports = upload