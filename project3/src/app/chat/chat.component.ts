import { AuthGuard } from './../auth.guard';
import { IChatModel } from './../models/ichat-model';
import { ChatService } from './../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  //public sessName = sessionStorage.getItem("UserName");
  public listChat: IChatModel[] = [];
  public tempChat: IChatModel = {Message: "", Owner: "", Time: null};

  constructor(private chatList: ChatService, 
              private formBuild: FormBuilder, 
              private route: Router,
              private guard: AuthGuard) {
    this.chatList.showData().subscribe(i=>this.listChat = i);
  }

  public inpFor: string;

  /*
  ** name
   */
  public addChat() {
    this.tempChat.Message = this.inpFor;
    this.tempChat.Owner = sessionStorage.getItem("UserName");
    this.tempChat.Time = new Date();
    this.chatList.addData(this.tempChat);
    //console.log(this.tempChat);
  }

  /**
   * logOut
   */
  public logOut() {
    sessionStorage.setItem("UserName", null);
    this.guard.guardKey = false;
    this.route.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}