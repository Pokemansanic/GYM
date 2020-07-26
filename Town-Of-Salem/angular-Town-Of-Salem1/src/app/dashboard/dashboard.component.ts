import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  
  roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(roles => this.roles = roles.slice(1, 5));
  }
}