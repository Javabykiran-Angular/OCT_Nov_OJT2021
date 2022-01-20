import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postArr=[];
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.postArr=(<any>response);
    })

  }

}
