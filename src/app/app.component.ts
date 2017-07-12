import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data;
  constructor(private appService: AppService) { }

  onClick(value: string) {
    this.appService.getData(value)
      .subscribe(data => this.data = data)

  }

}

