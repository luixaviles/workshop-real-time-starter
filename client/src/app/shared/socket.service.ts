import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Message } from './model/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = socketIo('http://localhost:3000');
   }

  public sendMessage(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<string>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }

  public stop(): void {
    this.socket.disconnect();
    console.log('stop listening.');
  }
}
