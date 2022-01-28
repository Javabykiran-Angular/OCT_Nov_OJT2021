import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  DispData:string='';
  constructor(private notification:NotificationService) { }

  ngOnInit() {
    this.notification.notification.subscribe((data)=>{
      console.log(data);
      this.DispData=data;
    })
  }

}
