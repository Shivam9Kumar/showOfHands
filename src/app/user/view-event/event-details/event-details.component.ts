import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:any;
candidates:any;
id:string;
totalVotes:number;
  constructor(private http:HttpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.totalVotes=0
    this.event={};
    this.candidates=[];
    this.route.queryParams.subscribe((params: any) => {
      this.id = params["id"];
  
      this.getEvent();
      });
  }

  getEvent(){
    this.http.getRequest("http://localhost:3000/events/"+this.id).then((response:any)=>{
      this.event=response;
      this.candidates=this.event.candidates;
    }).catch((error:HttpErrorResponse)=>{
      console.log(error)
    })
  }
  vote(name:string,index:number){
    this.event.isVoted=true;
    this.event.votedName=name;
  this.event.candidates[index].totalVotes+=1;
    this.http.putRequest("http://localhost:3000/events/"+this.id,this.event).then((response:any)=>{
   alert("Voted Successfully!");
   this.router.navigateByUrl("/user/viewEvent");
    }).catch((error:HttpErrorResponse)=>{
      console.log(error)
    })

  }
}
