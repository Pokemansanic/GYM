import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { ROLES } from '../mock-roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  Roles = ROLES;
  selectedRole: Role;

  constructor() { }

  ngOnInit() {
  }

  onSelect(role: Role): void {
    this.selectedRole = role;
  }
}