import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empobj=<Employee>{}
  constructor(private route:ActivatedRoute,
              private service:HttpService ) { }

  ngOnInit() {
    this.GetAllDataFromURL();
  }

  GetAllDataFromURL(){

        this.route.paramMap
        .subscribe((param)=>{
          console.log(param.get("id"))
          this.GetDataFromBackend(param.get("id"))
        })
  }

  GetDataFromBackend(id){

    this.service.GetParticularRecord(id)
    .subscribe((response)=>{
      console.log(response)
      this.empobj=(<Employee>response)
    })      
  }

}
