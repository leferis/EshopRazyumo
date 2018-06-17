const express        = require('express');
const bodyParser     = require('body-parser');
// const fileUpload     = require('express-fileupload');
const app            = express();
// var formidable       = require('formidable');
// var fs               = require('fs');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mysql = require('mysql');


const port = 8000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8081');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "garage"
});

pool.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('Address' + port);
});

//----------------saved scripts--------------------
// app.use(fileUpload());
 
// app.post('/users/upload', function(req, res) {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');
 
//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   console.log(req.files);
//   let sampleFile = req.files.UploadedImage;
//   console.log(req.files.UploadedImage.name);
 
//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('webpage/uploads/userphotos/' + req.files.UploadedImage.name , function(err) {
//     if (err)
//       return res.status(500).send(err);
 
//     res.send('File uploaded!');
//   });
// });
//--------------------------------------------------------------------