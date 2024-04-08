import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule, BASE_PATH} from "./api-module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ApiModule,
    ],
    providers:    [{provide: BASE_PATH, useValue: '/petclinic/api'}],
    bootstrap:    [
        AppComponent,
    ],
})
export class AppModule {
}
