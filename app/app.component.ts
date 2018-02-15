import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cityName="chennai";
  getDataJson(event){

    console.log("parent")
    
    console.log(event);

}
}