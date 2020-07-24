import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  roles: Role[];
  selectedRole: Role;

  constructor(private roleService: RoleService) {}
  ngOnInit() {
    this.getRoles();
  }
  getRoles(): void {
    this.roles = this.roleService.getRoles();
  }
  onSelect(role: Role): void {
    this.selectedRole = role;
  }
}
