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

  constructor(private roleService: RoleService, private messageService: MessageService) {}

  ngOnInit() {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles()
        .subscribe(roles => this.roles = roles);
  }

    add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.roleService.addRole({ name } as Role)
      .subscribe(role => {
        this.roles.push(role);
      });
  }
}
