import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Http requests to our API become available
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // This Component is available in the app
  ],
  imports: [ // We can use these Modules in our app
    BrowserModule, // for browser-based app
    AppRoutingModule,
    HttpClientModule, // 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrapping our app
})
export class AppModule { }
