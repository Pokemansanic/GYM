import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Role } from './role';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const roles = [
      { id: 1, name: 'Doctor' },
      { id: 2, name: 'Mayor' },
      { id: 3, name: 'Bodyguard' },
      { id: 4, name: 'Medium' },
      { id: 5, name: 'Retributionist' },
      { id: 6, name: 'Spy' },
      /*{ id: 7, name: 'Escort' },
      { id: 8, name: 'Transporter' },
      { id: 9, name: 'Lookout' },
      { id: 10, name: 'Vigilante' },
      { id: 11, name: 'Jailor' },
      { id: 12, name: 'Psychic' },
      { id: 13, name: 'Investigator' },
      { id: 14, name: 'Sheriff' },
      { id: 15, name: 'Tracker' },
      { id: 16, name: 'Vampire Hunter' },
      { id: 17, name: 'Veteran' },
      { id: 18, name: 'Crusader' }, */
      { id: 19, name: 'Trapper' }
    ];
    return {roles};
  }

  // Overrides the genId method to ensure that a role always has an id.
  // If the roles array is empty,
  // the method below returns the initial number (11).
  // if the roles array is not empty, the method below returns the highest
  // role id + 1.
  genId(roles: Role[]): number {
    return roles.length > 0 ? Math.max(...roles.map(role => role.id)) + 1 : 11;
  }
}