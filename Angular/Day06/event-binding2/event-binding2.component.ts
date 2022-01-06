import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit() {
  }
  onClick(name){
    console.log(name);
    console.log("==>> data=>> "+name.value)
  }

  onClick1(name2){
    console.log("==>> data=>> "+name2)
  }

  onClick2(name3){
    name3.style.background="green";
    name3.style.color='white';
  }

  OnAddition(num1,num2){

    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

  onChange(name){
    console.log("Change Event Occur...");
      let myvalue:string=name.value
    if(myvalue=='admin'){
      alert("Username already exist")
    }else{
      alert("Username available");
    }
  }

}
