import { PlayersService } from './../services/players.service';
import { Router } from '@angular/router';
import { GameGuardGuard } from './../guards/game-guard.guard';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.builder.group({
    Name: ['', [Validators.required, Validators.minLength(4)]],
    Password: ['', [Validators.required, Validators.minLength(4)]],
  });
  private listOfUser: User[];
  private isUser: boolean;

  constructor(
    private builder: FormBuilder,
    private userList: UsersService,
    private loginGuard: GameGuardGuard,
    private route: Router,
    private players: PlayersService
  ) {
    this.userList.sendUserData().subscribe(i=>{this.listOfUser=i;})
  }

  ngOnInit(): void {}

  /**
   * plslog
   */
  public plslog() {
    console.log(this.loginForm);
    for(let i=0;i<this.listOfUser.length;i++){
      if(this.listOfUser[i].Username == this.loginForm.controls.Name.value && this.listOfUser[i].Password == this.loginForm.controls.Password.value){
        this.isUser=true;
        this.players.setUser(this.listOfUser[i]);
        break;
      }
      else{
        this.isUser=false;
      }
    }
    if(this.isUser){
      sessionStorage.setItem('UserName', this.loginForm.controls.Name.value);
      this.loginGuard.keyAchiver(true);
      this.route.navigate(['/game']);
    }
    else{
      this.loginForm.reset();
    }
  }
}
