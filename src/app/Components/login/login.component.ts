import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private _auth: AuthService,private router:Router) {}

  ngOnInit() {}
  loginUser() {
    // console.log(this.loginUserData.value)
    return this._auth.loginUser(this.loginUserData.value).subscribe(
      res => {
        console.log(res), localStorage.setItem('token', res.token);
        this.router.navigate(['/special'])
      },
      err => console.log(err)
    );
  }
}
