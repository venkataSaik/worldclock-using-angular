import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WorldclockComponent } from './worldclock/worldclock.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldclockComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
