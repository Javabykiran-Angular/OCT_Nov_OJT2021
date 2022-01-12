import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

strData:string="String Data send from parent";

jsonObj={
  name:"Sumit",
  id:9,
  status:'Active'
}

StrReceivedData:string='';

JsonReceivedData:string='';
  constructor() { }

  ngOnInit() {
  }

}
