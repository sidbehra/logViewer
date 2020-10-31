import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  socket;
  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('my message','Hello there from Angular');    
  }

  getData(): Observable<any>
  {
    let observable = new Observable<any>(observer => {
      this.socket.on('my broadcast',(data:string)=>{
        observer.next(data)
      })
    })
  return observable;
  }
  
}
