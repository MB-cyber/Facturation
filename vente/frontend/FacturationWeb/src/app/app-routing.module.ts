import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {FactureComponent} from "./facture/facture.component";

const routes: Routes = [
  {
    path:"clients",component: ClientComponent
  },
  {
    path:"facturation/:id",component: FactureComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
