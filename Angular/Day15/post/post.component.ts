import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postArr=[];

  id:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetPost();

  }

  GetPost(){
    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.postArr=(<any>response);
    })
  }


  OnPost(inputtitle,inputbody){

    let obj={
      title:inputtitle,
      body:inputbody
    }
    
    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onEdit(item){
      console.log(item)
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
  }

  onUpdate(){
    let obj={
      title:this.title,
      id:this.id,
      body:this.body
    }

    this.service.UpdatePost(obj)
    .subscribe((response)=>{
      console.log(response);
      this.isHidden=true;
    })

  }


}
