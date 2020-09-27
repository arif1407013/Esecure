import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private dataset: User[] = [
    {Username:'Nini',Password:'123n',Active: null},
    {Username:'Bidu',Password:'123b',Active: null},
    {Username:'Khomba',Password:'123k',Active: null}
  ];

  /**
   * sendUserData
   */
  public sendUserData(): Observable<User[]> {
    return of (this.dataset);
  }
}
