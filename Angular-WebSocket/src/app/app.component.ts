import { Component } from '@angular/core';
import { WebSocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private webSocketService: WebSocketService) {}

  sendMessage(message: string) {
    this.webSocketService.sendMessage(message);
  }
}

