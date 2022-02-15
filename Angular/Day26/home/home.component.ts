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

}
