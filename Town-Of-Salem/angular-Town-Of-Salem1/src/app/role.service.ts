import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Role } from './role';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  private rolesUrl = 'api/roles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    
      private http: HttpClient,
      private messageService: MessageService
      
    )  { }
  
  /** GET roles from the server */
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl)
    .pipe(
      tap(_ => this.log('fetched roles')),
      catchError(this.handleError<Role[]>('getRoles', []))
    );
  }
    /** Log a RoleService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RoleService: ${message}`);
  }

    /** GET role by id. Will 404 if id not found */
  getRole(id: number): Observable<Role> {
    const url = `${this.rolesUrl}/${id}`;
    return this.http.get<Role>(url).pipe(
      tap(_ => this.log(`fetched role id=${id}`)),
      catchError(this.handleError<Role>(`getRole id=${id}`))
    );
  }

/** POST: add a new role to the server */
addRole(role: Role): Observable<Role> {
  return this.http.post<Role>(this.rolesUrl, role, this.httpOptions).pipe(
    tap((newRole: Role) => this.log(`added role w/ id=${newRole.id}`)),
    catchError(this.handleError<Role>('addRole'))
  );
}

  /** PUT: update the role on the server */
  updateRole(role: Role): Observable<any> {
    return this.http.put(this.rolesUrl, role, this.httpOptions)
    .pipe(
      tap(_ => this.log(`updated role id=${role.id}`)),
      catchError(this.handleError<any>('updateRole'))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumptionkk
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
