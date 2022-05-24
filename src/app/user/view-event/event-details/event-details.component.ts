import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private http:HttpService,private route:ActivatedRoute) { }

  ngOnInit(): void {
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
}
