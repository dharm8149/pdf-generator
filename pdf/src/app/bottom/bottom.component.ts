import { Component, NgZone, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { faSpinner, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ElectronService } from 'ngx-electron';
import { from, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  faSpinner=faSpinner
  pName:string=""
  msg:string=""
  faClose=faWindowClose
  cname:string='BottomComponent'
  @ViewChild('preview') prev!:ElementRef

  @ViewChild('foot') foot!:ElementRef
  @ViewChild('foot1') foot1!:ElementRef
  q_name:any
  observe$!:Observable<any>;
//searchField!: FormControl;
//quatation_name!:FormControl;
data:any
row_!:number
  @Output() eventToParent1=new EventEmitter<string>();
  @Output() eventToParent2=new EventEmitter<any>();
  @Output() pdfstart=new EventEmitter<string>();
  @Output() pdfend=new EventEmitter<string>();
name='hi'
@ViewChild('box') dialog1!:ElementRef
tempData:any
udata:any
tables:Array<any>=[]
infos:Array<any>=[]
  constructor(private _electronService: ElectronService,private ngzone:NgZone) { 
   
   this.getInitialValue();
  //  this.tables.push({pid:1,name:"test1",reta:25,quan:35,add:0,whol:30,purc:20})
  //  this.tables.push({pid:2,name:"test2",reta:25,quan:35,add:0,whol:30,purc:20})
  //  this.tables.push({pid:3,name:"test3",reta:25,quan:35,add:0,whol:30,purc:20})
  //  this.tables.push({pid:4,name:"test4",reta:25,quan:35,add:0,whol:30,purc:20})
   //console.log(this.tables)
  }


  getInitialValue(){

    
    if(this._electronService.isElectronApp){
      this._electronService.ipcRenderer.send('select');
      this._electronService.ipcRenderer.on('select',(event,arg)=>{
        ////console.log(arg)
   
        this.ngzone.run(()=>{
          ////console.log(this.tables)
          ////console.log(JSON.parse(arg)['msg'])
          this.tables=JSON.parse(arg)['msg']
          this.q_name=JSON.parse(arg)['name']
          this.tempData=this.q_name
          //console.log(JSON.parse(arg))
        })
        
    })
  }



}
callCome1(){
  this.dialog1.nativeElement.classList.add("show");
 }


 info(el:any){
  let rowId = el.getAttribute('row-index');
  this.row_=rowId
  
  var row_data=this.tables[rowId]
  this.pName=row_data.name
  if(this._electronService.isElectronApp){
    this._electronService.ipcRenderer.send('selecti',row_data.pid);
  } 
   this.callCome1()
 }
newQuatation(){
  if(this._electronService.isElectronApp){
    this._electronService.ipcRenderer.send('newQuatation');
  } 
}
hello():Array<String> {
 return ["ho","bye"] ;
}
  ngOnInit(): void {
    if(this._electronService.isElectronApp)

    this._electronService.ipcRenderer.on('insert',(event,arg)=>{
      //console.log(arg)
      if(JSON.parse(arg)['status'])
 {  //console.log("Came Here"+JSON.parse(arg)['status'])
      this.ngzone.run(()=>{
        this.tables.push(this.data)
        //console.log(this.data)
      this.data.pid=JSON.parse(arg)['msg'][0].seq
        var msg:string="Inserted Successfully";
        this.eventToParent1.emit(msg);
        ////console.log(this.tables)
      })
    }
    else{
      this.ngzone.run(()=>{
      //console.log("Came Here Perfct")
      var msg:string="Name Already Exists";
        this.eventToParent1.emit(msg);})
    }
  })

  if(this._electronService.isElectronApp)
  this._electronService.ipcRenderer.on('update',(event,arg)=>{
    if(JSON.parse(arg)['status'])
{
    this.ngzone.run(()=>{
      this.tables[this.row_]=JSON.parse(arg)['data']
      var msg:string="Updated Successfully";
      this.eventToParent1.emit(msg);
      ////console.log(this.tables)
    })
  }
})

if(this._electronService.isElectronApp)
this._electronService.ipcRenderer.on('selecti',(event,arg)=>{
  if(JSON.parse(arg)['status'])
{
  this.ngzone.run(()=>{
     ////console.log(JSON.parse(arg)['msg'])
     this.infos=JSON.parse(arg)['msg']
  })
}
})


if(this._electronService.isElectronApp)
this._electronService.ipcRenderer.on('updateq',(event,arg)=>{
  if(JSON.parse(arg)['status'])
{
  this.ngzone.run(()=>{
   this.q_name=this.tempData
   this.cancelN()

    ////console.log(this.tables)
  })
}
else{
  this.ngzone.run(()=>{
    //console.log("Test 1 Level")
    var a=this.foot1.nativeElement.firstChild
    a.style.display="block"
   
 
     ////console.log(this.tables)
   })
}
})
  //   this.searchField = new FormControl();
  //   this.searchField.valueChanges.pipe(
  //     debounceTime(300),// waits 300ms before calling server, to do only one call when user stops typing
  //     distinctUntilChanged(), // do not call server if input did not change since last call
  //     switchMap((term: string) =>this.hello()) // switchs the user-input observable to an http call observable depending on the user input. Ignores last call if a new one is triggered before last one is received.
  // ).subscribe(httpResults => //console.log(httpResults));



  // this.quatation_name=new FormControl();
  // this.quatation_name.valueChanges.pipe(debounceTime(600),
  // distinctUntilChanged(),
  // switchMap((value:string)=>{
  //   return [value,];
  // })).subscribe(name=>this.changeQName(name))

  if(this._electronService.isElectronApp)
  this._electronService.ipcRenderer.on('create_pdf',(event,arg)=>{

    this.ngzone.run(()=>{
      console.log(arg)
      arg=JSON.parse(arg)
      //console.log(arg)
    this.pdfend.emit(arg.msg);
      ////console.log(this.tables)
    })


    
  })



  }


  changeQName(val:string){
    if(this._electronService.isElectronApp){
     // this.q_name=val;
      this._electronService.ipcRenderer.send('updateq',val);} 
  }

  onChange(val :string){
    ////console.log(val)

  }
  addToList(el :any){
    
   let rowId = el.getAttribute('row-index');
   
   var row_data=this.tables[rowId]
   if(this._electronService.isElectronApp){
    this._electronService.ipcRenderer.send('addToList',row_data); 
    }
    this.tables[rowId].add=1;
    

  }


  deleteToList(el :any){
    
    let rowId = el.getAttribute('row-index');
    
    var row_data=this.tables[rowId]
    if(this._electronService.isElectronApp){
     this._electronService.ipcRenderer.send('deleteToList',row_data); 
     }
     this.tables[rowId].add=0;
     
 
   }
 
   updateList(el :any){
    
    let rowId = el.getAttribute('row-index');
    this.row_=rowId
    
    var row_data=this.tables[rowId]
    
    this.eventToParent2.emit({rowid:rowId,data:row_data});
 
   }
 
   close1(){
    this.dialog1.nativeElement.classList.remove("show");
   }

 add(name:string,quan:string,reta:string,whol:string,purc:string){
   
 this.data={"pid":0,"name":name,"quan":quan,"reta":reta,"whol":whol,"purc":purc,"add":0}
 ////console.log("call come")
// this.eventToParent1.emit("Inserted Successfully");
    if(this._electronService.isElectronApp){
      this._electronService.ipcRenderer.send('insert',this.data);
    
  }
 }

 update(pid:number,name:string,quan:string,reta:string,whol:string,purc:string,add:number){
   
  this.data={"pid":pid,"name":name,"quan":quan,"reta":reta,"whol":whol,"purc":purc,"add":add}
  ////console.log("call come")
  this.eventToParent1.emit("Updated Successfully");
     if(this._electronService.isElectronApp){
       this._electronService.ipcRenderer.send('update',this.data);
     
   }
  }
 
previewed(){
this.prev.nativeElement.classList.add('show');
}



cancel(){
  this.prev.nativeElement.classList.remove('show');
}

gen_pdf(){
  this.pdfstart.emit("Start");
  if(this._electronService.isElectronApp){
    this._electronService.ipcRenderer.send('create_pdf');

    
  
}
}


editS(){
  this.foot.nativeElement.classList.add("collapse")
  this.foot1.nativeElement.classList.remove("collapse")
}

editN(){
  var a=this.foot1.nativeElement.firstChild
    a.style.display="none"
this.changeQName(this.tempData)

}

cancelN(){
  var a=this.foot1.nativeElement.firstChild
  a.style.display="none"
  this.foot1.nativeElement.classList.add("collapse")
  this.foot.nativeElement.classList.remove("collapse")
  this.tempData=this.q_name
}
 
}
