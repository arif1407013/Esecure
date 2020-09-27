import { IUserModel } from './../models/iuser-model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public database;
  public datatemp;
  //public guardKey: boolean = false;

  constructor(private db: AngularFireDatabase) {
    this.database = this.db.list('/User').snapshotChanges();
    this.datatemp = this.db.list('/User').valueChanges();
    console.log(this.database);
    
  }

  /**
   * showData
   */
  public showData(): Observable<IUserModel[]> {
    console.log(this.database);
    return this.database;
  }

  /**
   * addData
   */
  public addData(x:IUserModel) {
    this.db.list('/User').push(x);
  }

  /**
   * checkData
   */
  public checkData(): Observable<IUserModel[]> {
    return this.datatemp;
  }
}
