const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');

// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
        
//         cb(null, Date.now()+file.originalname );
//       },
   
//       destination: function (req, file, cb) {
//       cb(null, 'public/image');
//     }
  
//   })

  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const extArray = file.originalname.split('.');
      console.log(extArray);
      const extension = extArray[extArray.length - 1];
      console.log(extension);
      
      cb(null, `${Date.now()}.${extension}`);
    },
    destination: 'public/image',
  });
  
  const upload = multer({ storage: storage })


app.use(express.json());

app.get('/', (req, res) => {
    res.send('file upload using multer package');
})

app.post('/add',upload.single('images'),function(req, res, next){
const img = req.file;
console.log(img);
res.send(img);
})



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})







