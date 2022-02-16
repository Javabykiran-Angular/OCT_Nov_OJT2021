import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myusername:string='';
  EmpData:any[]=[];
  status_tooltip:string='';

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.myusername=sessionStorage.getItem("username");
    this.GetAllData();
  }

  GetAllData(){

    this.service.GetAllrecord()
    .subscribe((response)=>{
      console.log(response);
      this.EmpData=(<any>response);

    })
  }

  onMouseOver(item){
   // this.status_tooltip=item.status;
    if(item.status.toLowerCase()=='active'){
      this.status_tooltip="Employee on Project";
    }else if(item.status.toLowerCase()=='inactive'){
      this.status_tooltip="Employee on Bench";
    }else{
      this.status_tooltip="Employee left";
    }
  }

}
