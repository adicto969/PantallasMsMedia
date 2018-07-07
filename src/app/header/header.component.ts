import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public session: boolean;
  public menuStyle: boolean;

  constructor() { }

  ngOnInit() {
    this.session = false;
    this.menuStyle = true;
  }

  public openMenu(style: boolean) 
  {
    this.menuStyle = style;
  }

}
