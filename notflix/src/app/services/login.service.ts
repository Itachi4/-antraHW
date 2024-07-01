import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string, password:string){
    //This function will be used to authenticate the user in the future
    localStorage.setItem("token", Math.random()+"");
  }
}
