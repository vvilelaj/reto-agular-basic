import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgenciasListComponent } from "./agencias-list/agencias-list.component";
import { SharedModule } from "../shared/shared.module";
import { ImagenAleatoriaPipe } from "./agencias-list/imagen-aleatoria.pipe";
import { AgenciaEditComponent } from './agencia-edit/agencia-edit.component';
import { AgenciaResolver } from './agencias-resolver.service';

const routes: Routes = [
  {
    path: "agencias",
    children: [
      {
        path: "",
        component: AgenciasListComponent
      },
       {
        path: ':id',
        component: AgenciaEditComponent,
        resolve: { resolvedData: AgenciaResolver }
      }
    ]
  }
];

@NgModule({
  declarations: [AgenciasListComponent, ImagenAleatoriaPipe, AgenciaEditComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class AgenciasModule {}
