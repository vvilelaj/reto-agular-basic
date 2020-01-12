import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgenciasListComponent } from "./agencias-list/agencias-list.component";
import { SharedModule } from "../shared/shared.module";
import { ImagenAleatoriaPipe } from "./agencias-list/imagen-aleatoria.pipe";

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
  declarations: [AgenciasListComponent, ImagenAleatoriaPipe],
  imports: [SharedModule, RouterModule.forChild(routes)],
  //exports: [ImagenAleatoriaPipe]
})
export class AgenciasModule {}
