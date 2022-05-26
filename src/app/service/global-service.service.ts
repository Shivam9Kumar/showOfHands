import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  public user_id: string;
  public user: string;
  constructor() { }


  getUserId() {
    return this.user_id;
  } 

  getUser() {
    return this.user;
  } 

 
  setInformation(
    user_id: string,
    user: string,
    
  ) {
    this.user_id = user_id;
    this.user=user;
  }

  remove() {
  
    this.user = '';
    this.user_id = '';
    
  } 
}
