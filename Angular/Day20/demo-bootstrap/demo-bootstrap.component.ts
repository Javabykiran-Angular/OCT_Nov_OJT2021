import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  
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
  constructor() { }

  ngOnInit() {
  }

}
