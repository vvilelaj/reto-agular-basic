import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { AgenciasRoutingModule } from "./agencias-routing.module";

import { AgenciasListComponent } from "./agencias-list/agencias-list.component";
import { ImagenAleatoriaPipe } from "./agencias-list/imagen-aleatoria.pipe";
import { AgenciaEditComponent } from "./agencia-edit/agencia-edit.component";

@NgModule({
  imports: [SharedModule, AgenciasRoutingModule],
  declarations: [
    AgenciasListComponent,
    ImagenAleatoriaPipe,
    AgenciaEditComponent
  ]
})
export class AgenciasModule {}
