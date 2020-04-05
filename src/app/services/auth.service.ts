import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:9000/api/register';
  private _loginUrl = 'http://localhost:9000/api/login';
  constructor(private _http: HttpClient, private _router: Router) {}
  registerUser(user) {
    console.log(user);
    return this._http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token'), this._router.navigate(['/events']);
  }
}
