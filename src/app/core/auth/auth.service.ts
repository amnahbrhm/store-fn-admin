import { Injectable } from '@angular/core';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;
  constructor(private http: HttpService) { }

  login(obj: object) {
    return this.http.post('auth/login', obj)
  }
  get isLoggedIn() {
    return this.loggedIn;
  }
  set isLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn
  }
}