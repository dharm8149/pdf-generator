const PDFDocument = require('pdfkit');
const fs = require('fs');

function createPdf(path,data){

let pdfDoc = new PDFDocument({margin:0,size:[594,846]});

//table
//pid,Item Name,Quantity,Retail Price,wholeSale price,Purchase Price




// var test=[{pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1testggdddhfhjfdhdfffjdknnfjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},
// {pid:1,name:"test1 testggdd dhfhjfdhdf ffjdknn fjfjfjf dkfjffjj fkfknfnf fkfkkf fkkf",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20},{pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20}


// ]


var hor=require('./hor')
hor.horizontal(data,pdfDoc)




pdfDoc.pipe(fs.createWriteStream(path));

pdfDoc.end();
return `{"status":true,"msg":"Pdf Created Succesfully"}`

}
module.exports={
    createPdf
}