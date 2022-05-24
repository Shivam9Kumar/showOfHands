import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:string;
  constructor(private route:ActivatedRoute,private http:HttpService) { }
task:any;
  ngOnInit(): void {
    this.task={};
    this.route.queryParams.subscribe((params: any) => {
      this.id = params["id"];
  
      this.getTask();
      });
  }
  getTask(){
    this.http.getRequest("http://localhost:3000/task/"+this.id).then((response:any)=>{
      this.task=response;
    }).catch((error:HttpErrorResponse)=>{
      console.log(error)
    })
  }

}
