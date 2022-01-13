import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdata:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sunt repudiandae accusamus deserunt expedita vero quod non repellendus iusto eum ad rerum quas alias, impedit optio ipsum iste facilis praesentium.";
  num2:number=452.78956324557;


  mydate=Date();

  constructor() { }

  ngOnInit() {
  }

}
