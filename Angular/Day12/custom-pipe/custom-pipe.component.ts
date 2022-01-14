import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates maiores dolores repellat non, cumque architecto perferendis veritatis fuga necessitatibus et vel modi recusandae. Dicta qui minima magni. Pariatur, rem voluptas.";
  strdetails1:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates maiores dolores repellat non, cumque architecto perferendis veritatis fuga necessitatibus et vel modi recusandae. Dicta qui minima magni. Pariatur, rem voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates maiores dolores repellat non, cumque architecto perferendis veritatis fuga necessitatibus et vel modi recusandae. Dicta qui minima magni. Pariatur, rem voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates maiores dolores repellat non, cumque architecto perferendis veritatis fuga necessitatibus et vel modi recusandae. Dicta qui minima magni. Pariatur, rem voluptas.";

  mywidth:number=12;
  constructor() { }

  ngOnInit() {
  }

}
