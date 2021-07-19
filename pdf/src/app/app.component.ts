import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { faSpinner, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngzne:NgZone){}
  rowid!:number
  add_!:number
  pid_!:number
  up:any={name:"",quan:0,reta:0,whol:0,purc:0}
  title = 'pdf';
  name:string=''
  loc:string=''
  msg:string=""

  pname:string='';
  faSpinner=faSpinner
  

  @ViewChild('sleft') sleft!:ElementRef;
  @ViewChild('pform') form!:ElementRef;
  @ViewChild('dialog') dialog!:ElementRef;
  @ViewChild('dialog1') dialog1!:ElementRef;
  @ViewChild('dialog2') dialog2!:ElementRef;
  @ViewChild('load1') load!:ElementRef;
  @ViewChild(BottomComponent) btm!:BottomComponent;

  faClose=faWindowClose
  update(){
    this.dialog2.nativeElement.classList.add("show");
   }
add(){
    this.dialog.nativeElement.classList.add("show");
   }
add_final(form:NgForm){
 var data=form.value
  //console.log(data)

if(data.name===""||data.name===null||data.quan===""||data.quan===null||data.reta===""||data.reta===null||data.whol===""||data.whol===null||data.purc===""||data.purc===null){
  this.msg="Please Fill All Required Field"
  this.callCome1()
}
else{
  this.msg="Inserting Item"
  this.dialog1.nativeElement.querySelector('.load').classList.add("show");
  this.callCome1()
  this.btm.add(data.name,data.quan,data.reta,data.whol,data.purc)
 
}


  
}


update_final(form:NgForm){

 this.up= form.value
  console.log(this.up)
 
 if(this.up.name===""||this.up.name===null||this.up.quan===""||this.up.quan===null||this.up.reta===""||this.up.reta===null||this.up.whol===""||this.up.whol===null||this.up.purc===""||this.up.purc===null){
   this.msg="Please Fill All Required Field"
   this.callCome1()
 }
 else{
   this.msg="Updating Item"
   this.dialog1.nativeElement.querySelector('.load').classList.add("show");
   this.callCome1()
   this.btm.update(this.pid_,this.up.name,this.up.quan,this.up.reta,this.up.whol,this.up.purc,this.add_)
  
 }
 
 
   
 }
 
 updateList(data:any){
    this.add_=data.data.add
    this.pid_=data.data.pid
    this.up=data.data
   
     this.rowid=data.rowid
     console.log(data)
     //console.log("call come"+msg)
    this.update();
 }

add_msg(msg:string){
  if(msg=="Inserted Successfully"){
 this.dialog.nativeElement.querySelector("form").reset()
 this.close()
  }
  
    
    console.log("call come")
    this.msg=msg
    //this.close()
    this.dialog1.nativeElement.querySelector('.load').classList.remove("show");

}
 callCome1(){
  this.dialog1.nativeElement.classList.add("show");
 }


 close(){
  this.dialog.nativeElement.classList.remove("show");
 }
 close1(){
  this.dialog1.nativeElement.classList.remove("show");
 }

 close3(){
  this.dialog2.nativeElement.classList.remove("show");
 }


 pdfstart(msg:string){
   console.log("call come "+msg)
  this.msg="Creating Pdf"
  this.dialog1.nativeElement.querySelector('.load').classList.add("show");
  this.callCome1()
 }

 pdfend(msg:string){
  this.msg=msg
  this.dialog1.nativeElement.querySelector('.load').classList.remove("show");
  this.callCome1()
 }
}
