import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BIG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  bgUrl = BIG_IMG_URL;

  email!: string;
  password!: string;
  LoginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);

  ngOnInit() {
    if (this.LoginService.isLoggedIn()) {
      this.router.navigateByUrl('/browser');
    }
  }

  signIn() {
    if (!this.email || !this.password) {
      this.toasterService.error('provide email or password');

      return;
    }
    //if email and pass are correct
    this.LoginService.login(this.email, this.password);
    this.toasterService.success('logged in successfully');

    this.router.navigateByUrl('/browser');
  }
}
