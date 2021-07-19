import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

tables:Array<any>=[]
  constructor() { 
   //this.getInitialValue();
   
  }


  getInitialValue(){

    this.tables=[{gpid:4,name:"dharm",quan:45,reta:45,whol:65,purc:70}]
   
  }
  ngOnInit(): void {
  }


  onChange(val :string){
    //console.log(val)

  }
  addToList(val :string){
    //console.log(val)

  }


 add(name:string,quan:string,reta:string,whol:string,purc:string){
   this.tables.push({"name":name,})
 }

}
