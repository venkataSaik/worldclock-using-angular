import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worldclock',
  templateUrl: './worldclock.component.html',
  styleUrls: ['./worldclock.component.css'],
  encapsulation:ViewEncapsulation.emulated;
})
export class WorldclockComponent implements OnInit {
  city: string;
  date: Date;
  FullDate;
  timeMillisec;
  clockdata;
  info;
  time;
  cityname;
  errorMessage;
  change;
  constructor(private http: HttpClient) { }
  @Input() cityFromParent: any;
  
  @Output() getWeatherReport = new EventEmitter();

  ngOnInit() {
  }
  getClockData() 
  {
    if (this.city == "" || this.city == null) 
    {
      this.errorMessage = "enter any city name";
    }
    else 
    {
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25').subscribe(data =>
       {
        this.info = data;
        this.getData();
        this.date.getDay();
        this.cityname = this.city;
        },
        error => {
          
          this.errorMessage = "enter city not found"
        });
  }
}
  getData() {

    this.timeMillisec = this.info.dt;

    this.date = new Date(this.timeMillisec * 1000)

    this.time = this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
    this.getday();
    this.FullDate = this.date.getDate() + " " + this.FullDate;
  }

  getday() {
    switch (this.date.getDay()) {
      case 1:
        this.FullDate = "Monday";
        break;
      case 2:
        this.FullDate = "Tuesday";
        break;
      case 3:
        this.FullDate = "Wednesday";
        break;
      case 4:
        this.FullDate = "Thursday";
        break;
      case 5:
        this.FullDate = "Friday";
        break;
      case 6:
        this.FullDate = "Saturday";
        break;
      case 7:
        this.FullDate = "Sunday";
        break;

    }
  }
}