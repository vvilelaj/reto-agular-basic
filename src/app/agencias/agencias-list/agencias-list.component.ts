import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AgenciaService } from '../agencias.service';
import { Agencia } from '../agencia';
import { ImagenAleatoriaPipe } from './imagen-aleatoria.pipe';

@Component({
  selector: "app-agencias-list",
  templateUrl: "./agencias-list.component.html",
  styleUrls: ["./agencias-list.component.css"]
})
export class AgenciasListComponent implements OnInit {
  pageTitle = "Agencias";
  imageWidth = 100;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAgencias = this.listFilter ? this.performFilter(this.listFilter) : this.agencias;
  }

  filteredAgencias: Agencia[] = [];
  agencias: Agencia[] = [];

  constructor(
    private agenciasService: AgenciaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listFilter = this.route.snapshot.queryParamMap.get("filterby") || "";

    this.agenciasService.getAgencias().subscribe(
      products => {

        this.agencias = products;
        this.filteredAgencias = this.performFilter(this.listFilter);
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Agencia[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.agencias.filter((agencia: Agencia) =>
      agencia.agencia.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
