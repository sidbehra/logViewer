import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from './Services/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socketio-angular';
  sub: Subscription;

 logs:string;
  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logService.setupSocketConnection()
    
    this.logService.getData().subscribe(document => {
      this.logs = document;
    } );
  }
}