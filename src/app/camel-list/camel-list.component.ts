import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

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

  isShowingForm: boolean = false;

  camelName: string;
  camelColor: string = "#ffffff";
  camelHumps: number;

  saveError: string;

  myCoolUploader = new FileUploader({
    url: 'http://localhost:3000/api/camels'
  });

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

  showCamelForm() {
    this.isShowingForm = true;
  } // close showCamelForm()

  saveNewCamel() {
    this.myCoolUploader.onBuildItemForm = (item, form) => {
        form.append('camelName', this.camelName);
        form.append('camelColor', this.camelColor);
        form.append('camelHumps', this.camelHumps);
    };

    this.myCoolUploader.onSuccessItem = (item, response) => {
        console.log(item);
        const newCamelFromApi = JSON.parse(response);
        this.camelArray.push(newCamelFromApi);
        this.isShowingForm = false;
        this.camelName = "";
        this.camelColor = "#ffffff";
        this.camelHumps = undefined;
        this.saveError = "";
    };

    this.myCoolUploader.onErrorItem = (item, response) => {
        console.log(item, response);
        this.saveError = 'Don\t be a dumb 🐫';
    };

    // this is the function that initiates the AJAX request
    this.myCoolUploader.uploadAll();
  } // saveNewCamel()

}
