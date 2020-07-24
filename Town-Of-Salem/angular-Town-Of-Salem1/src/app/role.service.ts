import { Injectable } from '@angular/core';
import { Role } from './role';
import { ROLES } from './mock-roles';
@Injectable({
  providedIn: 'root',
})
export class RoleService {

  constructor() { }
  getRoles(): Role[] {
    return ROLES;
  }

}
