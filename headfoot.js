
function draw(pdfDoc){
pdfDoc.fontSize(20).fillColor('blue')
//console.log()
pdfDoc.image('./pdf/src/assets/image/sai.png',297-pdfDoc.widthOfString("Om Sai Medical")/2 - 15, 5, {width: 30})
   .text('Om Sai Medical', 297-pdfDoc.widthOfString("Om Sai Medical")/2+15, 12.5);
var data="Dhanani Nagar,Shi gaon Road ,"
pdfDoc.fontSize(10);
var center=pdfDoc.widthOfString(data)


pdfDoc.text(data,297-center-20,40)

data="Boisar(East),Palghar-401501"


pdfDoc.text(data,297-center-20,55)
data="Mob:9370042249"


pdfDoc.text(data,297+20,40)
data="Email:dharm8149@gmail.com"


pdfDoc.text(data,297+20,55)


pdfDoc.moveTo(20,70).strokeColor('blue')
pdfDoc.lineTo(574,70).lineWidth(2).stroke(5)

var x=30
var y=80
var val=[]
var a=["PID","Item Name","Quantity","Retail Price","WholeSale Price","Purchase Price"]
//table
var height=0
for (let i of a){
    pdfDoc.fillColor('black')
    pdfDoc.fontSize(11)
    var width1
    if(i=="Item Name")
        width1=0.25*534
    else 
        width1=0.15*534
    data=i
    var height1=pdfDoc.heightOfString(data,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
        
    //console.log(width1)
   val.push({data:data,x:x,y:y,width:width1})
    x=x+width1

    
}



pdfDoc.moveTo(30,y-2+(height/2))
pdfDoc.lineTo(564,y-2+(height/2)).lineWidth(height+4).strokeColor('#c4fffd').stroke()

for(let i of val){
    //console.log(i)
    pdfDoc.fillColor('black')
    pdfDoc.text(i.data,Math.round(i.x)+2,i.y,{width: i.width-4,align: 'center'})
}
pdfDoc.moveTo(30,y+(height))
pdfDoc.lineTo(564,y+(height)).lineWidth(1).strokeColor('black').stroke()
y=y+height+2


//footer
pdfDoc.moveTo(20,820).strokeColor('blue')
pdfDoc.lineTo(574,820).lineWidth(2).stroke(10)

pdfDoc.fontSize(15);
data="Footer Text will Appear Here"
center=pdfDoc.widthOfString(data)


pdfDoc.text(data,297-center/2,825)


//footer
}

module.exports={draw}