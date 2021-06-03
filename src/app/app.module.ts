import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { CircleBarComponent } from './views/circle-bar/circle-bar.component';
import { IndicatorsComponent } from './views/indicators/indicators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {routes} from "./router/router";
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './views/main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CircleBarComponent,
    IndicatorsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
