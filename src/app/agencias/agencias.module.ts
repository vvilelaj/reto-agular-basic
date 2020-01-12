import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgenciasListComponent } from "./agencias-list/agencias-list.component";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "agencias",
    children: [
      {
        path: "",
        component: AgenciasListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [AgenciasListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class AgenciasModule {}
