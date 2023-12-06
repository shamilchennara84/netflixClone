import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BIG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BIG_IMG_URL;

  email!: string;
  password!: string;
  LoginService = inject(LoginService)
  router = inject(Router)


  signIn() {
    if (!this.email || !this.password) {
      alert('provide email or password');
      return;
    }
    //if email and pass are correct
    this.LoginService.login(this.email,this.password)

    this.router.navigateByUrl('/browser');


  }




}
