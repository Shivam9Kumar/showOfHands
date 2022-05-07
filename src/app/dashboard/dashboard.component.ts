import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
redirectAs(type:string){
  this.route.navigate(["login"], {
    queryParams: { as: type},
  });
}

getService(){
  this.route.navigateByUrl("getService");
}
register(){
  this.route.navigateByUrl("register");
}

}
