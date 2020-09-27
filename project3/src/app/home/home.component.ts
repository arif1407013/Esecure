import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  /**
   * disCheck
   */
  public disCheck() {
    if(sessionStorage.getItem("UserName")=="Abaddon"){
      //console.log(sessionStorage.getItem("UserName"));
      //console.log("true");
      return false;
    }
    else{
      //console.log("false");
      return true;
    }
  }

  ngOnInit(): void {
  }

}
