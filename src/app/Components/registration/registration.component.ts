import { AuthService } from './../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerationForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private _auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  registerUser() {
    return this._auth
      .registerUser(this.registerationForm.value)
      .subscribe(
        res => {
          console.log(res), localStorage.setItem('token', res.token);
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      );
    // console.log(this.registerationForm.value);
    // console.log(this.registerationForm.controls['email'].value);
    // console.log(this.registerationForm.get['email'].value);
  }
}
// updateemail() {
//   this.email.setValue('phanidharbeeram@gmail.com');
// }
// updateemail() {
//   this.email.setValue('phanidharbeeram@gmail.com');
// }
