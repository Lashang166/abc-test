const multer = require('multer')


//uploads    
const storage = multer.diskStorage({
    destination: (req, file, next) => {
      next(null, __dirname + "/client/public/assets//images/")
    },
    filename: (req, file, next) => {
      next(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
  })   

const upload = multer({ storage: storage })

module.exports = upload
