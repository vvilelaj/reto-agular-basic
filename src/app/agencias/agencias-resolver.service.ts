import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AgenciaService } from "./agencias.service";
import { Observable, of } from "rxjs";
import { AgenciaResolved } from "./agencia";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AgenciaResolver implements Resolve<AgenciaResolved> {
  constructor(private agenciasService: AgenciaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AgenciaResolved> {
    const id = route.paramMap.get("id");

    if (isNaN(+id)) {
      const message = `Agencia id is not a number : ${id}`;
      console.error(message);
      return of({ error: message, agencia: null });
    }

    return this.agenciasService.getAgencia(+id).pipe(
      map(agencia => ({ agencia })),
      catchError(error => {
        const message = `Retrieval error : ${error}`;
        console.error(message);
        return of({ agencia: null, error });
      })
    );
  }
}
