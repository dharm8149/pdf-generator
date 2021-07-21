import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { faSpinner, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  cname:string='RemoveComponent'
  mId:any
  @Output() eventToParent1=new EventEmitter<string>();
  faSpinner=faSpinner
  msg:string=""
  faClose=faWindowClose
  @ViewChild('box') dialog1!:ElementRef
  tables:Array<any>=[]
  constructor(private _electronService: ElectronService,private ngzone:NgZone) { 
   
   this.getInitialValue();
   this.tables.push({pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20})
   this.tables.push({pid:2,name:"test2",reta:25,quan:35,add:0,whol:30,purc:20})
   this.tables.push({pid:3,name:"test3",reta:25,quan:35,add:0,whol:30,purc:20})
   this.tables.push({pid:4,name:"test4",reta:25,quan:35,add:0,whol:30,purc:20})
   //console.log(this.tables)
  }


  getInitialValue(){

    
    if(this._electronService.isElectronApp){
      this._electronService.ipcRenderer.send('selectd');
      this._electronService.ipcRenderer.on('selectd',(event,arg)=>{
        ////console.log(arg)
   
        this.ngzone.run(()=>{
          ////console.log(this.tables)
          ////console.log(JSON.parse(arg)['msg'])
          this.tables=JSON.parse(arg)['msg']
          
        })
        
    })
  }


  if(this._electronService.isElectronApp){
   
    this._electronService.ipcRenderer.on('remove',(event,arg)=>{
     
      this.ngzone.run(()=>{
        
        
      })
      
  })
}
}


close1(){
  this.dialog1.nativeElement.classList.remove("show");
 }
deleteToList(el :any){
  
  let rowId = el.getAttribute('row-index');
  this.mId=rowId
  
  this.callCome1();
  
   

 }

 delete(){
  var row_data=this.tables[this.mId]
  if(this._electronService.isElectronApp){
   this._electronService.ipcRenderer.send('remove',row_data); 
   }
  
 
 }

  ngOnInit(): void {
    if(this._electronService.isElectronApp)
    this._electronService.ipcRenderer.on('remove',(event,arg)=>{
  if(JSON.parse(arg)['status'])
      this.ngzone.run(()=>{
      this.close1();

        this.tables.splice(this.mId,1)
        this.eventToParent1.emit("Element Removed Successfully")
      })
  
  
      
    })
  }





 
   callCome1(){
    this.dialog1.nativeElement.classList.add("show");
   }

   
  
}
