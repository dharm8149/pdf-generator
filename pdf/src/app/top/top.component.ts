import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output() eventToParent=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.eventToParent.emit(true);
}
}
