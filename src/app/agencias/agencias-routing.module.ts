import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AgenciasListComponent } from "./agencias-list/agencias-list.component";
import { AgenciaEditComponent } from "./agencia-edit/agencia-edit.component";
import { AgenciaResolver } from "./agencias-resolver.service";

const routes: Routes = [
  {
    path: "agencias",
    children: [
      {
        path: "",
        component: AgenciasListComponent
      },
      {
        path: ":id",
        component: AgenciaEditComponent,
        resolve: { resolvedData: AgenciaResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciasRoutingModule {}
