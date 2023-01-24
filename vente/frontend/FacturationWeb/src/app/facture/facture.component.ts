import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacturationService} from "../services/facturation.service";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit{
  // @ts-ignore
  constructor(private route: ActivatedRoute,private facturationService:FacturationService) {}
  id:any;
  facture:any;
  erreurMessage! : object;

  ngOnInit(): void {
  this.id=this.route.snapshot.params["id"];
    this.facturationService.getFacture(this.id).subscribe({
      next:(data)=>{
        console.log("data",data);
        this.facture=data;
        console.log(this.facture[0]["dateFature"]);
      },error:(err)=>{
        this.erreurMessage=err;
        console.log("err",err);
      }
    })
  }


}
