import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AuthServiceService } from './services/auth-service.service';
import { CamelServiceService } from './services/camel-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CamelListComponent } from './camel-list/camel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CamelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [
    AuthServiceService,
    CamelServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
