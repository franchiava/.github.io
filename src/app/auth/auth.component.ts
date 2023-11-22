import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  emailControl = new FormControl<string | null>("fraancotiago@gmail.com", [Validators.required]);
  passwordControl = new FormControl<string | null>("123456", [Validators.required]);

  authGroup = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(private authService: AuthService) { }

}

