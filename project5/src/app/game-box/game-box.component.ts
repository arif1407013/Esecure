import { PlayersService } from './../services/players.service';
import { Dots } from './../models/dots';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent implements OnInit, DoCheck {

  public rowCount: number[] = new Array(11);
  public columnCount: number[] = new Array(24);
  public username: string;

  public arrs: Dots[][];

  public player=1;
  public playerCount: number;

  public winner: string=null;

  constructor(
    private players: PlayersService
  ) {
    this.username = sessionStorage.getItem('UserName');
    sessionStorage.clear();
    //this.playerCount = this.players.getUser().length;
    console.log(this.players.getUser());
  }
  ngDoCheck(): void {
  }

  ngOnInit(): void {
    this.assignerInArrs();
  }

  /**
   * boxClick
   */
  public boxClick(x,y) {
    console.log(this.username);
    if(this.arrs[x][y].value==false){
      this.arrs[x][y].value=true;
      this.arrs[x][y].user=this.player;
      if(this.player==1){
        this.player=2;
      }
      else{
        this.player=1;
      }
      this.checkWinner(x,y);
      //console.log(this.checkWinner(x,y));
    }
    else if(this.arrs[x][y].user==this.player){
      this.arrs[x][y].value=false;
      this.arrs[x][y].user=null;
      if(this.player==1){
        this.player=2;
      }
      else{
        this.player=1;
      }
    }
  }

  private assignerInArrs() {
    this.rowCount=[];
    for(let i=0;i<=10;i++){
      this.rowCount[i]=i;
    }
    this.columnCount=[];
    for(let i=0;i<=23;i++){
      this.columnCount[i]=i;
    }
    this.arrs=[];
    for(let i=0;i<=10;i++){
      this.arrs[i]=[];
      for(let j=0;j<=23;j++){
        this.arrs[i][j]=new Dots(false,null);
      }
    }
  }

  private checkWinner(x: number, y:number) {
    let tempCount: number;
    tempCount = this.contBox(-1,-1,x,y)+this.contBox(1,1,x,y);
    if(tempCount>=4){
      //console.log('player'+this.arrs[x][y].user+' wins');
      this.winner=(this.arrs[x][y].user==1)? 'blue': 'green';
      //console.log(this.arrs[x][y].user);
      return null;
    }
    tempCount = this.contBox(-1,0,x,y)+this.contBox(1,0,x,y);
    if(tempCount>=4){
      //console.log('player'+this.arrs[x][y].user+' wins');
      this.winner=(this.arrs[x][y].user==1)? 'blue': 'green';
      //console.log(this.arrs[x][y].user);
      return null;
    }
    tempCount = this.contBox(-1,1,x,y)+this.contBox(1,-1,x,y);
    if(tempCount>=4){
      //console.log('player'+this.arrs[x][y].user+' wins');
      this.winner=(this.arrs[x][y].user==1)? 'blue': 'green';
      //console.log(this.arrs[x][y].user);
      return null;
    }
    tempCount = this.contBox(0,-1,x,y)+this.contBox(0,1,x,y);
    if(tempCount>=4){
      //console.log('player'+this.arrs[x][y].user+' wins');
      this.winner=(this.arrs[x][y].user==1)? 'blue': 'green';
      //console.log(this.arrs[x][y].user);
      return null;
    }
    return null;
  }

  private contBox(x:number, y:number, row:number, col:number):number {
    let tempCount: number=0;
    for(let i=1;row+(x*i)>=0 && row+(x*i)<=10 && col+(y*i)>=0 && col+(y*i)<=23;i++){
      if(this.arrs[row+i*x][col+i*y].user==this.arrs[row][col].user){
        tempCount++;
      }
      else{
        break;
      }
    }
    return tempCount;
  }
}