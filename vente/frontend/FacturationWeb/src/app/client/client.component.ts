import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients! : Array<Client>;
  erreurMessage !: any;

  constructor(private  clientsService: ClientsService) {
  }
  ngOnInit(): void {
  //this.clients=this.clientsService.getClients();

      this.clientsService.getClients().subscribe({
        next:(data)=>{
          console.log(data);
          this.clients=data["_embedded"]["clients"];
        },error:(err)=>{
          this.erreurMessage=err.message;

        }
      })

  }

}



