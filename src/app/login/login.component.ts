import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../common/common.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[UserService]
})
export class LoginComponent {

  router:Router;
  userName:string;
  password:string;
  token:string;
  
  constructor(_router: Router, private userService:UserService){   
       this.router = _router;
   }
  signInUser() {
    // this.router.navigateByUrl('user');
    this.userService.signInUser(this.userName, this.password).then (
      token =>
      {
        localStorage.setItem("token", (token.json().token).toString())
        this.userService.setLoggedUser(true)
        this.router.navigateByUrl('user')
      }
    ).catch(onerror=> this.userService.setLoggedUser(false));
  }
}
