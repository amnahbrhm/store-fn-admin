import { Injectable } from '@angular/core';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  constructor(private http: HttpService) { }

  login(obj: object) {
    return this.http.post('auth/login', obj)
  }
  isLoggedIn() {
    return this.loggedIn;
  }

}