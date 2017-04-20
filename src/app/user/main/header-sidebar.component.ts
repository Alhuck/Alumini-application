import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {UserService} from '../../common/common.service';
import {Menus} from '../../common/common.service';

@Component({
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css'],
  // providers:[UserService]
})
export class HeaderSidebarComponent implements OnInit {

  menus: Menus[];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserMenus();
  }

  @ViewChild('leftsidemenu') sidenav: any;
  onResize(event:any) {
    this.sidenav.open();
    if(event.target.innerWidth <= 770) {
      this.sidenav.close();
    }
  }
  
  getUserMenus() {
    this.userService.getUserMenus().then(menus => this.menus = menus);
  }

  pages:Array<Object> = [
    {name:"Settings", link:"userSetttings"}, 
    {name:"Logout", link:"/login"}, 
  ]
}
