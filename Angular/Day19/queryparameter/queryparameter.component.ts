import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myJson={
    myid:0,
    myfname:'',
    mystatus:''
  }

  constructor(private route:ActivatedRoute,
              private notify:NotificationService) { }

  ngOnInit() {
    this.GetAllDataFromURL();
  }

  GetAllDataFromURL(){
      this.route.queryParamMap
      .subscribe((param)=>{

        this.myJson.myid=+param.get("id");
        this.myJson.myfname=param.get("fname");
        this.myJson.mystatus=param.get("status");
      })
  }

  onSend(value){
      this.notify.SendNotification(value)
  }

}
