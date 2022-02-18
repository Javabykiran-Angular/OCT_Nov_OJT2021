import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  @Input() parentdata=<Employee>{};
  allCountry:any[]=[];

  issubmitDissabled:boolean=true;
  backendResponse:string='';

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetCountryFromBackend();
  }

  GetCountryFromBackend(){
      this.service.GetAllCountries()
      .subscribe((response)=>{
        this.allCountry=(<any>response);
      })
  }

  onupdate(){
    
      this.parentdata.updateddtm=Date.now();
    // console.log(this.parentdata);

      this.service.UpdateEmployee(this.parentdata)
      .subscribe((response)=>{
        console.log(response);
        this.issubmitDissabled=false;
        this.backendResponse=response;
      })

  }

}
