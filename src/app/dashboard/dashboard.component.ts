import { Component, OnInit } from '@angular/core';
import { UserToken } from '../models/userToken';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public UserToken = new UserToken(false);

  constructor() { }

  ngOnInit() {
    this.UserToken.session = false;
  }

}
