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

  fullNameValue: string;
  emailValue: string;
  passwordValue: string;

  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

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
    this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
          // clear form
          this.fullNameValue = "";
          this.emailValue = "";
          this.passwordValue = "";

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
    this.authThang.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
          // clear the form
          this.loginEmail = "";
          this.loginPassword = "";

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
