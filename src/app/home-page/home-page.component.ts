import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLoggedOut: boolean = false;

  signUpInfo = {
    fullName: '',
    email: '',
    password: ''
  };

  errorMessage: string;

  loginInfo = {
    email: '',
    password: ''
  };

  loginErrorMessage: string;


  constructor(
    private authThang: AuthServiceService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {
          this.routerThang.navigate(['/camels']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }

  doSignUp() {
    this.authThang.signup(this.signUpInfo)
      .then((resultFromApi) => {
          // clear form
          this.signUpInfo = {
            fullName: '',
            email: '',
            password: ''
          };

          // clear error message
          this.errorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['/camels']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMessage = parsedError.message + ' 😤';
      });
  } // close doSignUp()

  doLogin() {
    this.authThang.login(this.loginInfo)
      .then((resultFromApi) => {
          // clear the form
          this.loginInfo = {
            email: '',
            password: ''
          };

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['/camels']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message + ' 😤';
      });
  } // close doLogin()

}
