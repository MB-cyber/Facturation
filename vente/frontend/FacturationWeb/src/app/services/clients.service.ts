import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) {}
  public getClients():Observable<any>{
    return this.http.get("http://localhost:8080/CLIENT-SERVICE/clients");
  }
}
