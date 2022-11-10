import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public issubmitted = false;
  public login=Login;
  
  constructor(private fb: FormBuilder,private authenticationService:AuthenticationService) { }

  submit() {
    console.log(this.loginForm.value);
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password: ['', [Validators.required]],
      }
    )

  }
}