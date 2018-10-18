import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/model/message';

@Component({
  selector: 'wsc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [
    {
      date: '2018-10-18T09:53:00',
      from: 'juan',
      content: 'hello'
    },
    {
      date: '2018-10-18T15:59:00',
      from: 'maria',
      content: 'hey, how are you?'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
