import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

    course:string[]=['Angular 8','React Js','Vue Js','Embber Js','JSP'];


    arrProduct=[
        {
          name:"Motorola",
          price:25000,
          quantity:1
        },
        {
          name:"OnePlus",
          price:35000,
          quantity:2
        },
        {
          name:"Samsung",
          price:22000,
          quantity:2
        },
        {
          name:"RealMe",
          price:18000,
          quantity:1
        }

    ];

    selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse Over Event Occur....");
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
