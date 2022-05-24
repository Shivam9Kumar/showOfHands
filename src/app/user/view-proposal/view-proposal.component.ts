import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-view-proposal',
  templateUrl: './view-proposal.component.html',
  styleUrls: ['./view-proposal.component.css']
})
export class ViewProposalComponent implements OnInit {
proposal:any;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.proposal=[];
    this.getProposal();
  }
  getProposal(){
    this.http.getRequest("http://localhost:3000/proposal").then((response:any)=>{
      this.proposal=response;
    }).catch((error:HttpErrorResponse)=>{
      console.log(error)
    })
  }
  
}
