// var fs = require('fs');
// var pdf = require('html-pdf');

 const path = require('path');
// var a='file:///'+path.resolve('./pdf/src/assets/image')+"/"

// var html = fs.readFileSync('./template.html', 'utf8');
// var options = { format: 'Letter',
// "base":a,


//  header: {
//     "height": "5mm"
//   } };

// pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });
var pdf = require("pdf-creator-node");
var fs = require("fs");
const { SIGABRT } = require("constants");

// Read HTML Template
var html = fs.readFileSync("./template.html", "utf8");

var options = {
  format: "A4",
  orientation: "portrait",
  header: {
   
},

  footer:{}


}
var a='file:///'+path.resolve('./pdf/src/assets/image')+"/sai.png"


  var document = {
    html: html,
   data:{link:a},
    path: "./output.pdf",
    type: "",
  };


  


pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });