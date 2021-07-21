import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { faSpinner, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'pdf';
  name:string=''
  loc:string=''
  msg:string=""

  pname:string='';
  faSpinner=faSpinner
  

  @ViewChild('sleft') sleft!:ElementRef;
  @ViewChild('dialog') dialog!:ElementRef;
  @ViewChild('dialog1') dialog1!:ElementRef;
  @ViewChild('load1') load!:ElementRef;
  @ViewChild(BottomComponent) btm!:BottomComponent;

  faClose=faWindowClose

add(){
    this.dialog.nativeElement.classList.add("show");
   }
add_final(form:NgForm){
 var data=form.value
  ////console.log(data)

if(data.name===""||data.name===null||data.quan===""||data.quan===null||data.reta===""||data.reta===null||data.whol===""||data.whol===null||data.purc===""||data.purc===null){
  this.msg="Fill Fill All Required Field"
  this.callCome()
}
else{
  this.btm.add(data.name,data.quan,data.reta,data.whol,data.purc)
}


  
}


 callCome(){
  this.dialog1.nativeElement.classList.add("show");
 }

 close(){
  this.dialog.nativeElement.classList.remove("show");
 }
 close1(){
  this.dialog1.nativeElement.classList.remove("show");
 }


}
