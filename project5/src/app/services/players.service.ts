import { MockDatabase } from './../mock-database';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private Users: MockDatabase) { }
  /**
   * getUser
   */
  public getUser(): User[] {
    return this.Users.listOfPlayer;
  }
  /**
   * setUser
   */
  public setUser(tempUser: User) {
    this.Users.listOfPlayer.push(tempUser);
  }
}
