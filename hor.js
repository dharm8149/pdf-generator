function horizontal(test,pdfDoc){
    var head=require('./headfoot')
    head.draw(pdfDoc)



var height=0

var x=0
var y=107.43200000000002

for(let j of test){
    pdfDoc.fontSize(11)

    height=0
    var height1=0

    

       
       

        width1=0.15*534
        height1=pdfDoc.heightOfString(j.pid,{width: width1,align: 'center'})
        if(height1>height)
            height=height1
        
        
        
        
        width1=0.25*534
        height1=pdfDoc.heightOfString(j.name,{width: width1,align: 'center'})
        if(height1>height)
            height=height1
        
        
    
        width1=0.15*534
        height1=pdfDoc.heightOfString(j.quan,{width: width1,align: 'center'})
        if(height1>height)
            height=height1
        
    
        width1=0.15*534
        height1=pdfDoc.heightOfString(j.reta,{width: width1,align: 'center'})
        if(height1>height)
            height=height1
       
    
        width1=0.15*534
        height1=pdfDoc.heightOfString(j.whol,{width: width1,align: 'center'})
        if(height1>height)
            height=height1

        width1=0.15*534
        height1=pdfDoc.heightOfString(j.purc,{width: width1,align: 'center'})
        if(height1>height)
            height=height1
       
    
        
    

    if((y+height)<817){
    x=30
    
    pdfDoc.fillColor('black')
    
    width1=0.15*534
    pdfDoc.text(j.pid,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1
    

    width1=0.25*534
    pdfDoc.text(j.name,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
    pdfDoc.text(j.quan,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
    pdfDoc.text(j.reta,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
   
    pdfDoc.text(j.whol,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1


    width1=0.15*534
    pdfDoc.text(j.purc,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    pdfDoc.moveTo(30,y+6+(height))
    pdfDoc.lineTo(564,y+6+(height)).lineWidth(1).strokeColor('black').stroke()
    y=y+height+8
    
}
else{
    var ver=require('./ver')
    ver.vertical(x,y,height,pdfDoc)
    pdfDoc.addPage()
    var head=require('./headfoot')
    head.draw(pdfDoc)
    x=30
    var y=107.43200000000002
    height=0
    height1=0
    pdfDoc.fillColor('black')
    pdfDoc.fontSize(11)
    width1=0.15*534
    height1=pdfDoc.heightOfString(j.pid,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.pid,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1
    console.log(height+" "+height1)

    width1=0.25*534
    height1=pdfDoc.heightOfString(j.name,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.name,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
    height1=pdfDoc.heightOfString(j.quan,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.quan,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
    height1=pdfDoc.heightOfString(j.reta,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.reta,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    width1=0.15*534
    height1=pdfDoc.heightOfString(j.whol,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.whol,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1


    width1=0.15*534
    height1=pdfDoc.heightOfString(j.purc,{width: width1,align: 'center'})
    if(height1>height)
        height=height1
    pdfDoc.text(j.purc,Math.round(x)+2,y+3,{width:width1-4,align: 'center'})
    x=x+width1

    pdfDoc.moveTo(30,y+6+(height))
    pdfDoc.lineTo(564,y+6+(height)).lineWidth(1).strokeColor('black').stroke()
    y=y+height+8

}
}
var ver=require('./ver')
ver.vertical(x,y,height,pdfDoc)
}

module.exports={
    horizontal
}