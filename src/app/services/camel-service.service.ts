import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class CamelServiceService {

  constructor(
    private httpThang: Http
  ) { }


  newCamel(theName, theColor, theHumps) {
      return this.httpThang
        .post(
          environment.apiBase + '/api/camels',

          // Form body information to send to the back end (req.body)
          {
            camelName: theName,
            camelColor: theColor,
            camelHumps: theHumps
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close newCamel()


  allCamels() {
      return this.httpThang
        .get(
          environment.apiBase + '/api/camels',

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close allCamels()

}
