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


    module.exports={
        vertical
    }