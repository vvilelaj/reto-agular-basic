import { Component, OnInit } from "@angular/core";
import { Agencia } from "../agencia";
import { AgenciaService } from "../agencias.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-agencia-edit",
  templateUrl: "./agencia-edit.component.html",
  styleUrls: ["./agencia-edit.component.css"]
})
export class AgenciaEditComponent implements OnInit {
  pageTitle = "Editar Agencia";
  agencia: Agencia;
  errorMessage: string;

  constructor(
    private productService: AgenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const retrievedData = data["resolvedData"];
      this.errorMessage = retrievedData.error;
      this.onProductRetrieved(retrievedData.agencia);
    });
  }

  onProductRetrieved(agencia: Agencia): void {
    this.agencia = agencia;

    if (!this.agencia) {
      this.pageTitle = "No se encontro agencia";
    } else {
      if (this.agencia.id === 0) {
        this.pageTitle = "Registrar Agencia";
      } else {
        this.pageTitle = `Editar Agencia: ${this.agencia.agencia}`;
      }
    }
  }

  saveAgencia(): void {
    if (true === true) {
      if (this.agencia.id === 0) {
        this.productService.createAgencia(this.agencia).subscribe(
          () =>
            this.onSaveComplete(
              `La nueva agencia ${this.agencia.agencia} fue registrada.`
            ),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.productService.updateAgencia(this.agencia).subscribe(
          () =>
            this.onSaveComplete(
              `La agencia ${this.agencia.agencia} fue actualizada`
            ),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    } else {
      this.errorMessage = "Please correct the validation errors.";
    }
  }

  onSaveComplete(message?: string): void {
    // if (message) {
    //   this.messageService.addMessage(message);
    // }

    this.router.navigate(["/agencias"], { queryParamsHandling: "preserve" });
  }

  deleteAgencia(): void {
    if (this.agencia.id === 0) {
      this.onSaveComplete(`${this.agencia.agencia} was deleted`);
    } else {
      if (
        confirm(
          `Realmente quiere eliminar la agencia : ${this.agencia.agencia}?`
        )
      ) {
        this.productService.deleteAgencia(this.agencia.id).subscribe(
          () => this.onSaveComplete(`${this.agencia.agencia} fue eliminado`),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }
}
