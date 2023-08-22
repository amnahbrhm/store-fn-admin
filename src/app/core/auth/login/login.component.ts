import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }
  form: FormGroup = new FormGroup({
    user_name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  login() {
    this.authService.login(this.form.value).subscribe((data: any) => {
      next: {
        console.log(data);
        this.authService.loggedIn = true
        localStorage.setItem('token', data['token'])
        this.router.navigateByUrl('items')
      }
    })
    // this.authService.loggedIn = true
  }
}
