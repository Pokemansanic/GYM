import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../role';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RoleService }  from '../role.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  @Input() role: Role;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRole();
  }
  
  getRole(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roleService.getRole(id)
      .subscribe(role => this.role = role);
  }
}