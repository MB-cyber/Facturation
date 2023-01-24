import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacturationService {


  constructor(private http: HttpClient) {
  }

  public getFacture(id:any): Observable<any> {

    console.log(id);
    return this.http.get("http://localhost:8080/FACTURE-SERVICE/factures/client/" + id);
  }
}
