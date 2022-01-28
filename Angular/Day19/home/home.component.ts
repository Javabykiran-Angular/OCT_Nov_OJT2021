import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  myid:number=9;
  myusername:string='Sumit Raokhande';

  myjson={
    id:9,
    fname:'Sumit',
    status:'Active'

  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPage1(){
      this.router.navigate(['']);
  }

  onPage2(){

    this.myid=8;
    this.router.navigate(['/Page2',this.myid])
  }
  onPage3(){
    this.myid=8;
    this.myusername='Spruha';
    this.router.navigate(['/Page3',this.myid,this.myusername]);
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }
  onqueryParam(){

    this.router.navigate(['/queryparameter'],{
      queryParams:this.myjson
    })
  }

}
