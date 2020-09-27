import { Observable } from 'rxjs';
import { IChatModel } from './../models/ichat-model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public database;

  constructor(private db: AngularFireDatabase) {
    this.database = this.db.list('/Chat', ref=>ref.orderByKey().limitToLast(20)).valueChanges();
  }

  /**
   * showData
   */
  public showData(): Observable<IChatModel[]> {
    return this.database;
  }

  /**
   * addData
   */
  public addData(x: IChatModel) {
    //console.log(x);
    let tempChat = {
      Message: x.Message,
      Owner: x.Owner,
      Time: x.Time.getDate()+"/"+(x.Time.getMonth()+1)+"/"+x.Time.getFullYear()+"("+x.Time.getHours()+":"+x.Time.getMinutes()+")"
    }
    console.log(tempChat);
    this.db.list('/Chat').push(tempChat);
  }
}
