function horizontal(test,pdfDoc){
   // var head=require('./headfoot')
   draw(pdfDoc)



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
    //var ver=require('./ver')
    vertical(x,y,height,pdfDoc)
    pdfDoc.addPage()
    var head=require('./headfoot')
   draw(pdfDoc)
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
//var ver=require('./ver')
vertical(x,y,height,pdfDoc)
}


function vertical(x,y,height,pdfDoc){
    const {dialog}=require('electron')
    const response=dialog.showMessageBox(null,{message:"Come Here main"})
    console.log(response)
    pdfDoc.moveTo(30,76)
    pdfDoc.lineTo(564,76).lineWidth(1).strokeColor('black').stroke()
    
    
    x=30
    y=y-height-2
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.15*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.25*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.15*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.15*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.15*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    
    x=x+0.15*534
    
    pdfDoc.moveTo(x,76)
    pdfDoc.lineTo(x,y+(height)).lineWidth(1).strokeColor('black').stroke()
    }


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
        
        
module.exports={
    horizontal
}