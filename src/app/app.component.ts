import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserToken } from './models/userToken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pantallas MSMEDIA';
  UserToken = new UserToken(false);
  
  public ngOnInit()
  {

  }
}
