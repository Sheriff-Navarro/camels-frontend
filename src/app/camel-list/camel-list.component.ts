import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';
import { CamelServiceService } from '../services/camel-service.service';

@Component({
  selector: 'app-camel-list',
  templateUrl: './camel-list.component.html',
  styleUrls: ['./camel-list.component.css']
})
export class CamelListComponent implements OnInit {

  currentUser: any = {};

  logoutError: string;

  camelArray: any[] = [];
  camelListError: string;

  constructor(
    private authThang: AuthServiceService,
    private camelThang: CamelServiceService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      .then((userFromApi) => {
          this.currentUser = userFromApi;
          this.getThemCamels();
      })
      .catch(() => {
          this.routerThang.navigate(['/']);
      });
  } // close ngOnInit()

  logMeOutPls() {
    this.authThang.logout()
      .then(() => {
          this.routerThang.navigate(['/']);
      })
      .catch(() => {
          this.logoutError = 'Log out went to 💩';
      });
  } // close logMeOutPls()

  getThemCamels() {
    this.camelThang.allCamels()
      .subscribe(
        (allTheCamels) => {
            this.camelArray = allTheCamels;
        },
        () => {
            this.camelListError = 'Sorry everybody. No camels today. 😱';
        }
      );
  } // close getThemCamels()

}
