import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  fullNameValue: string;
  emailValue: string;
  passwordValue: string;

  loginEmail: string;
  loginPassword: string;

  errorMessage: string;

  constructor(
    private authThang: AuthServiceService,
    private routerThang: Router
  ) { }

  ngOnInit() {
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
    alert('LOGIN SUBMITTED');
  }

}
