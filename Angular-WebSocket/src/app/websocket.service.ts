import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: WebSocket;
  private readonly url: string = "ws://localhost:3000/";

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket conexão aberta');
    };

    this.socket.onmessage = (event: MessageEvent) => {
      this.onMessage(event.data);
    };

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error: ', error);
    };

    this.socket.onclose = (event: CloseEvent) => {
      console.log(`WebSocket conexão fechada com código ${event.code}`);
      setTimeout(() => this.connect(), 1000);
    };
  }

  sendMessage(message: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket conexão não está aberta. mensagem não enviada.');
    }
  }

  private onMessage(message: string) {
    console.log('WebSocket message: ', message);
  }
}
