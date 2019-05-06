import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WebsocketService } from './websocket-service';
import { map } from 'rxjs/operators';
import { IServiceMessage } from '../view-models/server-interface';
const URL = "ws://192.168.0.4:1334";

export interface Message {
  author: string;
  message: string;
}

@Injectable({providedIn: 'root'})

export class FeedService {
  public messages: Subject<Message>;
  public onMessageArrived: Subject<IServiceMessage> = new Subject<IServiceMessage>();
  
    constructor(private wsService: WebsocketService) {
    
  }

  connect() {
    console.log("FEED COMMUNICATION SERVICE: Trying to connect websocket service...");
    try {
      this.messages = <Subject<any>>this.wsService
        .connect(URL).pipe(map((response: MessageEvent): void => {
          if (response.type == 'open')
            console.log("Websocket Open")
          if (response.type == 'error')
            console.log("Websocket Error")
          if (response.type == 'message') {
            this.onMessage(response.data);
          }
        }));
      this.messages.subscribe(msg => {
      },
        (error) => {
          console.log(` response from service  ERROR!!------> ` + error);

          //this.reconnect()
        },
        () => {
          console.log(` response from service  CLOSED!!!!!!------> `);

          //this.reconnect()
        });
    } catch (error) {
      console.log("FEED COMMUNICATION SERVICE error!");
      console.log(error);
    }
  }
  onMessage(data: any) {
    //console.log(data);  

    let json = JSON.parse(data);
    if(json["Status"]==="starting"){
    }
    else if(json["Status"]==="finished"){

    }
    else{
      let service_message = json as IServiceMessage;
      this.onMessageArrived.next(service_message);
      //console.log(service_message);
    }
  }
}