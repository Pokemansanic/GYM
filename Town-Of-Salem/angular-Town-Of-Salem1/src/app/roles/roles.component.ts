import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  roles: Role[];
  selectedRole: Role;

  constructor(private roleService: RoleService, private messageService: MessageService) {}
  ngOnInit() {
    this.getRoles();
  }
  getRoles(): void {
    this.roleService.getRoles()
        .subscribe(roles => this.roles = roles);
  }
  onSelect(role: Role): void {
    this.selectedRole = role;
    this.messageService.add(`RolesComponent: Selected role id=${role.id}`);
  }
}
