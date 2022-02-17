import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myusername:string='';
  EmpData:any[]=[];
  status_tooltip:string='';
  empobj=<Employee>{};
  modalRef: BsModalRef; 
  isRadioCheck:boolean=false;

  config = {
    animated: true,    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
    private modalservice:BsModalService) { }

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

  onRadioClick(item){
    console.log(item);
    this.empobj=item;
    this.isRadioCheck=true;
  }

  RadioClickCheck(){
    if(this.isRadioCheck)
    return true;
    else
    return false;
  }

  OpenPopUp(popup:TemplateRef<any>){

    if(this.RadioClickCheck()){
      this.modalRef=this.modalservice.show(popup,this.config);
    
    }else{
      alert("Please select a Employee to Update...")
    }

    
  }

}
