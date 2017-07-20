import { Component, OnInit } from '@angular/core';

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

  constructor(
    private authThang: AuthServiceService
  ) { }

  ngOnInit() {
  }

  doSignUp() {
    this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
          alert('Sign up worked! ' + resultFromApi._id);
          console.log(resultFromApi);
      })
      .catch((err) => {
          alert('Error 😤');
          console.log(err);
      });
  }

}
