import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// @ts-ignore
import * as Stomp from "stompjs";
// @ts-ignore
import * as SockJS from "sockjs-client";
// @ts-ignore
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CpmService {

  producerHostUrl = 'http://localhost:8081/';
  consumerHostUrl = 'http://localhost:8082/websocket'
  client: any;

  constructor(private http: HttpClient) { }


  savePatient(request: any){
    return this.http.post(this.producerHostUrl + 'api/savePatient', request, {responseType: "text"})
  }

  connection(){
    let ws = new SockJS(this.consumerHostUrl);
    this.client = Stomp.over(ws);
    return this.client;
  }
}
