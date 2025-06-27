import multer from 'multer'

// Define where and how to store files
const storage = multer.diskStorage({

    //cb=callBack fun
      destination: function (req, file, cb) {
    cb(null, "./public/temp"); // store files in uploads folder
  },
  filename: function (req, file, cb) {  
    cb(null, Date.now() + "-" + file.originalname); // make filename unique
  }
}); 


const upload = multer({ storage }); // create middleware