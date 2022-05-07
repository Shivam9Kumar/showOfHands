import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
asUser:boolean=false;
asAdmin:boolean=false;
type:string='';
  ngOnInit(): void {
    this.asAdmin=false;
    this.asUser=false;
    this.route.queryParamMap.subscribe((arg: any) => {
      this.type = arg.params.as;

    });
  if(this.type=='user'){
this.asUser=true;

  }
  else if(this.type=='admin'){
    this.asAdmin=true;
      }
      else{
        this.router.navigateByUrl("");
        
      }

}

userLogin(){
this.router.navigateByUrl("user");
}
adminLogin(){
  this.router.navigateByUrl("admin");
}
back(){
  this.router.navigateByUrl("");
}
}
