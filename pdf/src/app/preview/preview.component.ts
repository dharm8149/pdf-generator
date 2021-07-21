import { Component, Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';

import { BottomComponent } from '../bottom/bottom.component';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() table!:Array<any>;
  @Input() name!:string;
  @Output() eventToParent=new EventEmitter<boolean>();
  @Output() eventToParent1=new EventEmitter<boolean>();


  

num:any=[1,2,3]
  constructor() {
  
   
   }

  ngOnInit(): void {
    //console.log(this.table)
    //console.log(this.name)
  }

  gen_pdf(){
    this.eventToParent.emit(true);
  }
  canceled(){
    this.eventToParent1.emit(true);
  }

}
