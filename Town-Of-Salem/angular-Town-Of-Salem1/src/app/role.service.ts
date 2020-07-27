import { Injectable } from '@angular/core';
import { Role } from './role';
import { ROLES } from './mock-roles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  constructor(private messageService: MessageService) { }
  
  getRoles(): Observable<Role[]> {
    // TODO: send the message _after_ fetching the roles
    this.messageService.add('RoleService: fetched roles');
    return of(ROLES);
  }


  getRole(id: number): Observable<Role> {
    // TODO: send the message _after_ fetching the role
    this.messageService.add('RoleService: fetched roles id=${id}');
    return of(ROLES.find(role => role.id === id));
  }
}
