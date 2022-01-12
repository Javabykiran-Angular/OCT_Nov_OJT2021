import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() ChildStrEvent=new EventEmitter();

 strChildData="Data send from Child.....";

 @Output() ChildJsonEvent=new EventEmitter();

 Jsondata={
  name:"Spruha",
  id:3,
  status:'InActive'
 }
  constructor() { }

  ngOnInit() {
  }

  onClick(){
      this.ChildStrEvent.emit(this.strChildData);
      this.ChildJsonEvent.emit(this.Jsondata);
  }

}
