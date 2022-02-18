import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private baseUrl:string="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }


  LoginCheck(obj){
       return (this.http.post(`${this.baseUrl}logincheck`,obj));
  } 

  GetAllrecord(){
      return (this.http.get(`${this.baseUrl}getallemployee`));
  }

  GetParticularRecord(id){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }

  GetAllCountries(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  AddEmployee(obj){
     return (this.http.post(`${this.baseUrl}addemployee`,obj,{responseType:'text'}));
  }

  UpdateEmployee(obj){
    return  (this.http.put(`${this.baseUrl}updateemployee`,obj,{responseType:'text'}));
  }

}
