import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Agencia } from "./agencia";

@Injectable({
  providedIn: "root"
})
export class AgenciaService {
  private agenciaApiUrl = "api/agencias";

  constructor(private http: HttpClient) {}

  getAgencias(): Observable<Agencia[]> {
    return this.http.get<Agencia[]>(this.agenciaApiUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAgencia(id: number): Observable<Agencia> {
    if (id === 0) {
      return of(this.initializeAgencia());
    }
    const url = `${this.agenciaApiUrl}/${id}`;
    return this.http.get<Agencia>(url).pipe(
      tap(data => console.log("getAgencia: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createAgencia(Agencia: Agencia): Observable<Agencia> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    Agencia.id = null;
    return this.http
      .post<Agencia>(this.agenciaApiUrl, Agencia, { headers: headers })
      .pipe(
        tap(data => console.log("createAgencia: " + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteAgencia(id: number): Observable<{}> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.agenciaApiUrl}/${id}`;
    return this.http
      .delete<Agencia>(url, { headers: headers })
      .pipe(
        tap(data => console.log("deleteAgencia: " + id)),
        catchError(this.handleError)
      );
  }

  updateAgencia(agencia: Agencia): Observable<Agencia> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.agenciaApiUrl}/${agencia.id}`;
    return this.http
      .put<Agencia>(url, agencia, { headers: headers })
      .pipe(
        tap(() => console.log("updateAgencia: " + agencia.id)),
        // Return the Agencia on an update
        map(() => agencia),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeAgencia(): Agencia {
    // Return an initialized object
    return {
      id: 0,
      agencia: null,
      distrito: null,
      provincia: null,
      departamento: null,
      direccion: null,
      lat: 0,
      lon: 0
    };
  }
}
