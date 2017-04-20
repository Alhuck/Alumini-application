import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../common/common.service';
import {User} from '../../../common/common.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[UserService]
})
export class UserHomeComponent implements OnInit{

  user:User;
  setUserDetails(user:any) {
    console.dir(user.json());
    let userValue = user.json();
    this.user = new User(userValue.name, userValue.email);
  }

  public ngOnInit():void {
    this.userService.getLoggedUserDetails().then(user => this.setUserDetails(user))
    .catch(onerror=>console.log(onerror));
  }

  public constructor(private userService:UserService) {
  }
}