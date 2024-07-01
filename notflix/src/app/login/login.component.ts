import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
 onSubmit(){}


}
