import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 logoURL = LOGO_URL;
 bgURL = BG_IMG_URL;
 email!:string;
 password!:string;
 constructor(private loginService: LoginService, private router: Router){}  
 onSubmit(){
  console.log(this.email, this.password)
  this.loginService.login(this.email,this.password);
  this.router.navigateByUrl('/browse');
 }


}
