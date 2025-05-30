import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http:HttpClient) { }
  getCredentials(){
    return this.http.get<{clientId:string,bearerToken:string}>('./.netlify/functions/get-credentials')
  }
}
